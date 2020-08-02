import { Machine, assign } from "xstate";

const hasTitle = (_, event) => Boolean(event.data.trim());
const isComplete = context => context.isComplete;
const handleTitleChange = assign({ title: (_, event) => event.data });
const handleComplete = assign({ isComplete: true });
const handleIncomplete = assign({ isComplete: false });

export const todoListItemMachine = Machine(
    {
        id: "todoListItemMachine",
        initial: "read",
        context: {
            title: "",
            isComplete: undefined
        },
        states: {
            read: {
                id: "read",
                initial: "unknown",
                on: {
                    DELETE: "delete",
                    EDIT: { target: "edit" }
                },
                states: {
                    unknown: {
                        on: {
                            "": [
                                { cond: "isComplete", target: "complete" },
                                { target: "active" }
                            ]
                        }
                    },
                    active: {
                        on: {
                            TOGGLE: {
                                target: "complete",
                                actions: ["handleComplete", "onSave"]
                            }
                        }
                    },
                    complete: {
                        on: {
                            TOGGLE: {
                                target: "active",
                                actions: ["handleIncomplete", "onSave"]
                            }
                        }
                    }
                }
            },
            edit: {
                entry: "handleInputFocus",
                on: {
                    TITLE_BLUR: "read",
                    TITLE_CHANGE: [
                        {
                            cond: "hasTitle",
                            actions: ["handleTitleChange", "onSave"],
                            target: "read"
                        },
                        {
                            target: "delete"
                        }
                    ]
                }
            },
            delete: {
                type: "final",
                entry: "onDelete"
            }
        }
    },
    {
        guards: {
            isComplete,
            hasTitle
        },
        actions: {
            handleTitleChange,
            handleComplete,
            handleIncomplete
        }
    }
);
