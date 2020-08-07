
import knex from '../../../database/connection';

export default async function todo(request, response) {

    try {
        let { ids } = request.query;
        if (ids.includes(',')) {
            ids = String(ids)
                .split(',')
                .map(item => item.trim());
        }
        else
            ids = [ids];

        switch (request.method) {
            case 'PUT':
                const { title, isComplete } = request.body;
                let resp = null;
                if (ids.length === 1) {
                    resp = await knex('todos')
                        .where('id', ids[0])
                        .update({ title, isComplete }, ['id', 'title', 'isComplete']);
                    const todo = {
                        id: ids[0],
                        title,
                        isComplete
                    };
                    return response.json(todo);
                }
                return response.status(404).json({ error: 'Not found' });

            case 'DELETE':
                await knex('todos')
                    .whereIn('id', ids)
                    .del();

                return response.json({ message: 'Ok' });
            default:
                response.status(400).json({ error: 'http method not accepted for that path' });
                break;
        }
    } catch (err) {
        response.status(400).json({ error: err.message });
    }

}