import React, { useRef } from "react";
import { useMachine } from "@xstate/react";
import { todoListMachine } from "./TodoList.machine";
import { todoListStateComponents } from "./TodoList.states";

const TodoList = () => {
    const todoInputRef = useRef();
    const [machine, send, service] = useMachine(todoListMachine, {
        actions: {
            handleFocusInput: () => {
                todoInputRef.current.focus();
            },
        },
    });

    const state = getState(machine.value);
    const StateComponent = todoListStateComponents[state];
    const { draft, todos } = machine.context;
    const isAllComplete = todos && todos.length && todos.every(todo => todo.isComplete);
    const mark = !isAllComplete ? "completed" : "active";

    React.useEffect(() => {
        send('fetch');
    })

    return (
        <section className="todoapp" >
            <header className="header">
                <h1>todos</h1>
                <input
                    ref={todoInputRef}
                    className="new-todo"
                    autoFocus
                    name="title"
                    placeholder="O que precisa ser feito?"
                    value={draft}
                    onChange={event => {
                        send({ type: "TODO_DRAFT", data: event.currentTarget.value });
                    }}
                    onKeyPress={e => {
                        if (e.key === "Enter") {
                            send({ type: "TODO_CREATE", data: e.target.value });
                        }
                    }}
                />
            </header>
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    checked={isAllComplete}
                    onChange={event => {
                        send({ type: "COMPLETED_TOGGLE", data: event.target.checked });
                    }}
                />
                <label htmlFor="toggle-all" title={`Mark all as ${mark}`}>
                    Mark all as {mark}
                </label>
            </section>
            {StateComponent && <StateComponent service={service} />}
        </section>
    );
};

function getState(value) {
    return typeof value === "string" ? value : Object.keys(value)[0];
}

export { TodoList };
