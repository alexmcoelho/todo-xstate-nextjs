import knex from '../../database/connection';

export default async function todoMethodsWithoutId(request, response) {
    try {
        switch (request.method) {
            case 'GET':
                const todos = await knex('todos').select('todos.*');
                return response.json(todos);
            case 'POST':
                const { id, title, isComplete } = request.body;
                const todo = { id, title, isComplete };
                await knex('todos').insert({ id, title, isComplete });
                return response.json(todo);
            default:
                response.status(400).json({ error: 'http method not accepted for that path' });
                break;
        }
    } catch (err) {
        response.status(400).json({ error: err.message });
    }
}
