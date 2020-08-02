import { Machine, assign, send } from "xstate";
import api from '../../services/api';

const hasValue = (_, event) => Boolean(event.data.trim());
const isLastTodo = context => context.todos.length === 1;

const setTodos = assign({
    todos: (_, event) => event.data
});

const setDraft = assign({
    draft: (_, event) => event.data
});

const clearDraft = assign({ draft: "" });

const deleteCompleted = assign({
    todos: context => {
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

export const todoListMachine = Machine(
    {
        id: "todoListMachine",
        initial: "load",
        context: {
            draft: "",
            todos: []
        },
        on: {
            TODO_CREATE: {
                cond: "hasValue",
                target: "saveData"
            },
        },
        states: {
            load: {
                on: {
                    fetch: 'loading'
                }
            },
            loading: {
                invoke: {
                    src: async (context, event) => {
                        const response = await api.get('/todos')
                        const result = response.data;
                        return result;
                    },
                    onDone: {
                        actions: assign({
                            todos: (_, event) => {
                                return event.data
                            }
                        }),
                        target: 'list',
                    },
                    onError: "empty"
                }
            },
            saveData: {
                invoke: {
                    src: async (context, event) => {
                        let data = {};
                        if (event.data.id) {
                            data = event.data;
                            await api.put(`/todos/${event.data.id}`, data)
                        }
                        else {
                            data = { title: event.data, isComplete: false };
                            await api.post('/todos', data)
                        }
                    },
                    onDone: {
                        target: 'loading',
                        actions: "clearDraft"
                    },
                    onError: "empty"
                }
            },
            deleteData: {
                invoke: {
                    src: async (context, event) => {
                        await api.delete(`/todos/${event.data}`)
                        const response = await api.get('/todos')
                    },
                    onDone: {
                        target: 'loading',
                        actions: "clearDraft"
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
                    TODO_UPDATE: {
                        target: "saveData"
                    },
                    TODO_DELETE: [
                        {
                            cond: "isLastTodo",
                            target: ["empty", "deleteData"]
                        },
                        {
                            target: "deleteData"
                        }
                    ],
                    COMPLETED_DELETE: {
                        actions: ["deleteCompleted", send("SAVE")]
                    },
                    COMPLETED_TOGGLE: {
                        actions: ["toggleCompleted", send("SAVE")]
                    },
                    SHOW_ALL: ".all",
                    SHOW_ACTIVE: ".active",
                    SHOW_COMPLETE: ".complete",
                    SAVE: {
                        actions: "handleSave"
                    }
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
            deleteCompleted,
            toggleCompleted
        },
    }
);
