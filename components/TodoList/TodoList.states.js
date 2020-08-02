import React from "react";
import { useService } from "@xstate/react";
import styled from "styled-components";
import { rgba } from "polished";
import { TodoListItem } from "./TodoListItem";

const ListState = ({ service }) => {
  const [machine, send] = useService(service);
  const { todos } = machine.context;
  const filterState = machine.value.list;
  const filteredTodos = {
    all: todos,
    active: todos.filter(todo => !todo.isComplete),
    complete: todos.filter(todo => todo.isComplete)
  };

  const activeCount = filteredTodos.active.length;
  const completeCount = filteredTodos.complete.length;

  function handleTodoSave(id, todo) {
    send({ type: "TODO_UPDATE", data: { id, ...todo } });
  }

  return (
    <>
      <List>
        {filteredTodos[filterState].map(todo => (
          <TodoListItem
            key={todo.id + todo.isComplete}
            defaultTitle={todo.title}
            defaultIsComplete={todo.isComplete}
            onDelete={() => send({ type: "TODO_DELETE", data: todo.id })}
            onSave={newTodo => handleTodoSave(todo.id, newTodo)}
          />
        ))}
      </List>
      <Footer>
        <Count>
          {activeCount} {activeCount === 1 ? " tarefa pendente" : " tarefas pendentes"}
        </Count>
        <Toggles>
          <TogglesItem>
            <TogglesButton
              aria-pressed={filterState === "all"}
              onClick={() => send("SHOW_ALL")}
            >
              Todas
            </TogglesButton>
          </TogglesItem>
          <TogglesItem>
            <TogglesButton
              aria-pressed={filterState === "active"}
              onClick={() => send("SHOW_ACTIVE")}
            >
              Ativas
            </TogglesButton>
          </TogglesItem>
          <TogglesItem>
            <TogglesButton
              aria-pressed={filterState === "complete"}
              onClick={() => send("SHOW_COMPLETE")}
            >
              Concluídas
            </TogglesButton>
          </TogglesItem>
        </Toggles>
        {Boolean(completeCount) && (
          <ClearComplete onClick={() => send("COMPLETED_DELETE")} />
        )}
      </Footer>
    </>
  );
};

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Footer = styled.footer`
  border-top: 1px solid #ddd;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  font-size: 0.8em;
`;

const Count = styled.p`
  margin: 0;
  color: #999;
`;

const Toggles = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const TogglesItem = styled.li`
  & + & {
    margin-left: 5px;
  }
`;

const TogglesButton = styled.button.attrs(() => ({ type: "button" }))`
  border: 1px solid #ddd;
  padding: 5px 10px;
  font: inherit;
  border-radius: 3px;

  &:hover {
    background: ${rgba("green", 0.5)};
    border-color: ${rgba("green", 0.5)};
  }

  &[aria-pressed="true"] {
    color: #fff;
    background: green;
    border: green;
  }
`;

const ClearComplete = styled.button.attrs(() => ({
  type: "button",
  children: "Clear completed"
}))`
  background: transparent;
  border: 0;
  padding: 0;
  text-align: left;
  font: inherit;
  color: #999;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const todoListStateComponents = {
  list: ListState
};
