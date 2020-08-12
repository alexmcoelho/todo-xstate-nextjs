import { Machine, assign, send } from "xstate";
import { uuid } from 'uuidv4';

import api from '../../services/api';

const hasValue = (_, event) => Boolean(event.data.trim());
const isLastTodo = context => context.todos.length === 0;

const setTodos = assign({
    todos: (context, event) => {
        return event.data
    }
});

const setDraft = assign({
    draft: (_, event) => event.data
});

const clearDraft = assign({ draft: "" });

const updateTodo = assign({
    todos: (context, event) => {
        if (event.data && event.data.id) {
            const newTodos = [...context.todos];
            const { id } = event.data;
            const index = newTodos.findIndex(todo => todo.id === id);
            newTodos[index] = event.data;
            return newTodos;
        }
        return context.todos;
    }
});

const saveTodo = assign({
    todos: (context, event) => {
        return [
            ...context.todos,
            {
                id: uuid(),
                title: event.data,
                isComplete: false
            }
        ];
    }
});

const deleteTodo = assign({
    todos: (context, event) => {
        return context.todos.filter(todo => todo.id !== event.data);
    }
});

const deleteCompleted = assign({
    todos: (context, event) => {
        return context.todos.filter(todo => !todo.isComplete);
    }
});

const toggleCompleted = assign({
    todos: (context, event) => {
        return context.todos.map(todo => ({
            ...todo,
            isComplete: event.data
        }));
    }
});

const listAll = async (context, event) => {
    const response = await api.get('/todos')
    const result = response.data;
    return result;
}

const save = async (context, event) => {
    let data = {};
    if (event.data.id) {
        data = event.data;
        await api.put(`/todo/${event.data.id}`, data)
        return null;
    }
    else {
        const size = context.todos.length;
        const { id, title } = context.todos[size - 1];
        data = { id, title: event.data, isComplete: false };
        const response = await api.post('/todos', data);
        const result = response.data;
        return result;
    }
}

const deleteOn = async (context, event) => {
    await api.delete(`/todo/${event.data}`)
}

const deleteOnSeveral = async (context, event) => {
    const todosCompleted = context.todos.filter(todo => todo.isComplete)
    const idTodosCompleted = todosCompleted.map(todo => todo.id);
    await api.delete(`/todo/${idTodosCompleted}`)
}

const updateSeveral = async (context, event) => {
    await api.post(`/todo/updateall`, { isCompleteAll: event.data })
}

export const todoListMachine = Machine(
    {
        id: "todoListMachine",
        initial: "load",
        context: {
            draft: "",
            todos: []
        },
        states: {
            load: {
                on: {
                    fetch: 'loading'
                }
            },
            loading: {
                invoke: {
                    src: listAll,
                    onDone: {
                        actions: "setTodos",
                        target: 'list',
                    },
                    onError: "empty"
                }
            },
            empty: {
                entry: "handleFocusInput",
                on: {
                    TODO_DRAFT: {
                        actions: "setDraft"
                    },
                }
            },
            list: {
                id: "list",
                initial: "all",
                on: {
                    TODO_DRAFT: {
                        actions: "setDraft"
                    },
                    TODO_CREATE: {
                        actions: ["save", "saveTodo", send({ type: 'TODO_DRAFT', data: '' })]
                    },
                    TODO_UPDATE: {
                        actions: ["save", "updateTodo", "clearDraft"],
                    },
                    TODO_DELETE: [
                        {
                            cond: "isLastTodo",
                            actions: ["deleteOn", "deleteTodo"],
                            target: "empty"
                        },
                        {
                            actions: ["deleteOn", "deleteTodo"]
                        },
                    ],
                    DELETE_ON_SEVERAL: {
                        actions: "deleteOnSeveral"
                    },
                    DELETE_COMPLETED: {
                        actions: "deleteCompleted"
                    },
                    COMPLETED_DELETE: {
                        actions: [send('DELETE_ON_SEVERAL'), send('DELETE_COMPLETED')]
                    },
                    COMPLETED_TOGGLE: {
                        actions: ["updateSeveral", "toggleCompleted", "clearDraft"]
                    },
                    SHOW_ALL: ".all",
                    SHOW_ACTIVE: ".active",
                    SHOW_COMPLETE: ".complete",
                },
                states: {
                    all: {},
                    active: {},
                    complete: {}
                }
            }
        }
    },
    {
        guards: {
            hasValue,
            isLastTodo
        },
        actions: {
            setTodos,
            setDraft,
            clearDraft,
            saveTodo,
            updateTodo,
            deleteTodo,
            deleteCompleted,
            toggleCompleted,
            save,
            deleteOn,
            deleteOnSeveral,
            updateSeveral
        },
    }
);
