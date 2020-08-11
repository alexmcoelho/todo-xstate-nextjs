import React from "react";
import { useService } from "@xstate/react";
import cn from "classnames";
import styled from "styled-components";
import { TodoListItem } from "./TodoListItem";

const ListState = ({ service }) => {
  const [machine, send] = useService(service);
  const { todos } = machine.context;
  const filterState = machine.value.list;
  const filteredTodos = {
    all: todos,
    active: todos ? todos.filter(todo => !todo.isComplete) : [],
    complete: todos ? todos.filter(todo => todo.isComplete) : []
  };

  const activeCount = filteredTodos.active.length;
  const completeCount = filteredTodos.complete.length;

  function handleTodoSave(id, todo) {
    send({ type: "TODO_UPDATE", data: { id, ...todo } });
  }

  return (
    <>
      <ul className="todo-list">
        {filteredTodos[filterState].map(todo => (
          <TodoListItem
            key={todo.id + todo.isComplete + todo.title}
            defaultTitle={todo.title}
            defaultIsComplete={todo.isComplete}
            onDelete={() => send({ type: "TODO_DELETE", data: todo.id })}
            onSave={newTodo => handleTodoSave(todo.id, newTodo)}
          />
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount} {activeCount === 1 ? " tarefa pendente" : " tarefas pendentes"}</strong>
        </span>
        <ul className="filters">
          <li>
            <TogglesHref
              className={cn({
                selected: machine.event.type === 'SHOW_ALL'
              })}
              href={null}
              onClick={() => send("SHOW_ALL")}
            >
              Todos
            </TogglesHref>
          </li>
          <li>
            <TogglesHref
              className={cn({
                selected: machine.event.type === 'SHOW_ACTIVE'
              })}
              href={null}
              onClick={() => send("SHOW_ACTIVE")}
            >
              Ativos
            </TogglesHref>
          </li>
          <li>
            <TogglesHref
              className={cn({
                selected: machine.event.type === 'SHOW_COMPLETE'
              })}
              href={null}
              onClick={() => send("SHOW_COMPLETE")}
            >
              Concluído
            </TogglesHref>
          </li>
        </ul>
        {Boolean(completeCount) && (
          <button
            onClick={() => send("COMPLETED_DELETE")}
            className="clear-completed"
          >
            Limpa concluídos
          </button>
        )}
      </footer>
    </>
  );
};

const TogglesHref = styled.a`
  cursor: pointer;
`;

export const todoListStateComponents = {
  list: ListState
};
