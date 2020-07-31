import { NextApiRequest, NextApiResponse } from 'next';

export default function getAll(request, response) {

    const arrayInit = [
        {
            completed: false,
            id: "2dc55767-e5bb-47c7-8a6a-8713a5e635a8",
            title: "teste 1"
        },
        {
            completed: false,
            id: "cdd8e472-1030-4a52-9f10-6dfb94ea7575",
            title: "Aprenda máquinas de estado"
        }
    ]
    response.json(arrayInit);
}