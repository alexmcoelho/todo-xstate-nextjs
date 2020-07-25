import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useMachine } from "@xstate/react";
import { useHashChange } from "../utils/useHashChange";
import { Todo } from "./Todo";
import { todosMachine } from "../machines/todosMachine";

function filterTodos(state, todos) {
  if (state.matches("active")) {
    return todos.filter(todo => !todo.completed);
  }

  if (state.matches("completed")) {
    return todos.filter(todo => todo.completed);
  }

  return todos;
}

const persistedTodosMachine = todosMachine.withConfig(
  {
    actions: {
      persist: ctx => {
        localStorage.setItem("todos-xstate", JSON.stringify(ctx.todos));
      }
    }
  },
  // initial state from localstorage
  {
    todo: "Aprenda máquinas de estado",
    todos: (() => {
      try {
        return JSON.parse(localStorage.getItem("todos-xstate")) || [];
      } catch (e) {
        return [];
      }
    })()
  }
);

export default function Todos() {
  const [state, send] = useMachine(persistedTodosMachine);
  const [contend, setContent] = useState(null);

  useHashChange(() => {
    send(`SHOW.${window.location.hash.slice(2) || "all"}`);
  });

  // Capture initial state of browser hash
  useEffect(() => {
    window.location.hash.slice(2) &&
      send(`SHOW.${window.location.hash.slice(2)}`);
  });

  useEffect(() => {
    setContent(
      <section className="todoapp" data-state={state.toStrings()}>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            autoFocus
            onKeyPress={e => {
              if (e.key === "Enter") {
                send("NEWTODO.COMMIT", { value: e.target.value });
              }
            }}
            onChange={e => send("NEWTODO.CHANGE", { value: e.target.value })}
            value={todo}
          />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={allCompleted}
            onChange={() => {
              send(markEvent);
            }}
          />
          <label htmlFor="toggle-all" title={`Mark all as ${mark}`}>
            Mark all as {mark}
          </label>
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              todo ? <Todo key={todo.id} todoRef={todo.ref} /> : null
            ))}
          </ul>
        </section>
        {!!todos.length && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{numActiveTodos}</strong>
              {numActiveTodos === 1 ? " item restante" : " itens restantes"}
            </span>
            <ul className="filters">
              <li>
                <a
                  className={cn({
                    selected: state.matches("all")
                  })}
                  href="#/"
                >
                  Todos
              </a>
              </li>
              <li>
                <a
                  className={cn({
                    selected: state.matches("active")
                  })}
                  href="#/active"
                >
                  Ativos
              </a>
              </li>
              <li>
                <a
                  className={cn({
                    selected: state.matches("completed")
                  })}
                  href="#/completed"
                >
                  Concluídos
              </a>
              </li>
            </ul>
            {numActiveTodos < todos.length && (
              <button
                onClick={_ => send("CLEAR_COMPLETED")}
                className="clear-completed"
              >
                Limpa concluídos
              </button>
            )}
          </footer>
        )}
      </section>
    )
  }, [state])

  const { todos, todo } = state.context;

  const numActiveTodos = todos.filter(todo => !todo.completed).length;
  const allCompleted = todos.length > 0 && numActiveTodos === 0;
  const mark = !allCompleted ? "completed" : "active";
  const markEvent = `MARK.${mark}`;
  const filteredTodos = filterTodos(state, todos);

  return (
    contend
  );
}
