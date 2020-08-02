
import knex from '../../../database/connection';

export default async function todo(request, response) {

    try {

        switch (request.method) {
            case 'POST':
                const todos = await knex('todos').select('todos.*');
                const idTodos = todos.map(todo => todo.id);

                const { isCompleteAll } = request.body;

                const resp = await knex('todos')
                    .whereIn('id', idTodos)
                    .update({ isComplete: isCompleteAll }, ['id', 'isComplete']);

                return response.json({ message: 'Ok' });
            default:
                response.status(400).json({ error: 'http method not accepted for that path' });
                break;
        }
    } catch (err) {
        response.status(400).json({ error: err.message });
    }

}