import React from "react";
import { useMachine } from "@xstate/react";
import { todoListItemMachine } from "./TodoListItem.machine";
import { todoListItemStateComponents } from "./TodoListItem.states";

const TodoListItem = ({
    defaultTitle,
    defaultIsComplete,
    onSave,
    onDelete
}) => {
    const [machine, , service] = useMachine(
        todoListItemMachine.withContext({
            title: defaultTitle,
            isComplete: defaultIsComplete
        }),
        {
            actions: {
                onSave,
                onDelete
            }
        }
    );

    const state = getState(machine.value);
    const StateComponent = todoListItemStateComponents[state];

    return StateComponent ? <StateComponent service={service} /> : null;
};

function getState(value) {
    return typeof value === "string" ? value : Object.keys(value)[0];
}

export { TodoListItem };
