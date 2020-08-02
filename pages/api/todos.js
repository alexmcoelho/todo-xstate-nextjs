import { NextApiRequest, NextApiResponse } from 'next';

const todos = [
    {
        isComplete: false,
        id: '2dc55767-e5bb-47c7-8a6a-8713a5e635a8',
        title: 'teste 1',
    },
    {
        isComplete: true,
        id: '2dc55767-e5bb-47c7-8a6a-8713a5e635gt',
        title: 'teste 2',
    },
];

export default function getAll(request, response) {
    try {
        return response.json(todos);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
}