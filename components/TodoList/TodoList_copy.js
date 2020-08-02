import React from "react";
import { useMachine } from "@xstate/react";
import { Machine, assign } from 'xstate'

const TodoList = () => {

    const [current, send] = useMachine(fetchTodos);

    const fetchData = async () => {
        send('fetch')
    }

    React.useEffect(() => {
        async function fetchData() {
            send('fetch')
        }
        fetchData();
    }, [])

    if (current.value === 'Loading') {
        return 'loading...'
    }

    return (
        <div>
            <button onClick={fetchData}>Pesquiar</button>
            <ul>
                {current.value === 'Success' &&
                    current.context.list.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })}
            </ul>
        </div>
    );
};

const fetchTodos = Machine({
    id: 'fetchTodos',
    initial: 'NotAsked',
    context: {
        list: []
    },
    states: {
        NotAsked: {
            on: {
                fetch: 'Loading',
            }
        },
        Loading: {
            invoke: {
                src: async (context, event) => {
                    const response = await fetch('http://localhost:3333/todos')
                    const result = await response.json();
                    return result;
                },
                onDone: {
                    target: 'Success',
                    actions: assign({
                        list: (_, event) => {
                            return event.data
                        }
                    })
                },
                onError: {
                    target: 'Failure'
                }
            }
        },
        Success: {},
        Failure: {}
    }
})


export { TodoList };
