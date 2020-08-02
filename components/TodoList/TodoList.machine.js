import { Machine, assign, send } from "xstate";
import api from '../../services/api';

const hasValue = (_, event) => Boolean(event.data.trim());
const isLastTodo = context => context.todos.length === 0;

const setTodos = assign({
    todos: (_, event) => event.data
});

const setDraft = assign({
    draft: (_, event) => event.data
});

const clearDraft = assign({ draft: "" });

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
    }
    else {
        data = { title: event.data, isComplete: false };
        await api.post('/todos', data)
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
                    src: listAll,
                    onDone: {
                        actions: "setTodos",
                        target: 'list',
                    },
                    onError: "empty"
                }
            },
            saveData: {
                invoke: {
                    src: save,
                    onDone: {
                        target: 'loading',
                        actions: "clearDraft"
                    },
                    onError: "empty"
                }
            },
            deleteData: {
                invoke: {
                    src: deleteOn,
                    onDone: {
                        target: 'loading',
                        actions: "clearDraft"
                    },
                    onError: "empty"
                }
            },
            deleteSeveral: {
                invoke: {
                    src: deleteOnSeveral,
                    onDone: {
                        target: 'loading',
                        actions: "clearDraft"
                    },
                    onError: "empty"
                }
            },
            updateSeveral: {
                invoke: {
                    src: updateSeveral,
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
                            actions: ["deleteTodo"],
                            target: "empty"
                        },
                        {
                            target: "deleteData"
                        },
                    ],
                    COMPLETED_DELETE: {
                        target: "deleteSeveral"
                    },
                    COMPLETED_TOGGLE: {
                        //actions: ["toggleCompleted", send("SAVE")]
                        target: "updateSeveral"
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
        },
    }
);
