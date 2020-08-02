import React, { useRef } from "react";
import { useMachine } from "@xstate/react";
import styled from "styled-components";
import { Form } from "../Form";
import { Checkbox } from "../Checkbox";
import { todoListMachine } from "./TodoList.machine";
import { todoListStateComponents } from "./TodoList.states";

const STORAGE_KEY = "todos";

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
    const isAllComplete = todos.length && todos.every(todo => todo.isComplete);

    React.useEffect(() => {
        send('fetch');
    })

    if (machine.value === 'loading') {
        return 'loading...'
    }

    return (
        <section>
            <Title>todos</Title>
            <Wrapper>
                <Controls>
                    <Checkbox
                        disabled={machine.matches("empty")}
                        checked={isAllComplete}
                        onChange={event => {
                            send({ type: "COMPLETED_TOGGLE", data: event.target.checked });
                        }}
                    />
                    <CreateForm
                        onSubmit={data => send({ type: "TODO_CREATE", data: data.title })}
                    >
                        <Input
                            ref={todoInputRef}
                            name="title"
                            placeholder="O que precisa ser feito?"
                            value={draft}
                            onChange={event => {
                                send({ type: "TODO_DRAFT", data: event.currentTarget.value });
                            }}
                        />
                    </CreateForm>
                </Controls>
                {StateComponent && <StateComponent service={service} />}
            </Wrapper>
            <Instructions>
                Duplo clique para editar tarefa
            </Instructions>
        </section>
    );
};

function getState(value) {
    return typeof value === "string" ? value : Object.keys(value)[0];
}

const Title = styled.h1`
  margin: 20px 0 10px;
  text-align: center;
  font-weight: 300;
  font-size: 4em;
  color: #cb343c;
`;

const Wrapper = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 0 10px;
  max-width: 550px;
  margin: 0 auto;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const CreateForm = styled(Form)`
  flex: 1 1 auto;
`;

const Input = styled.input.attrs(() => ({ type: "text" }))`
  border: 0;
  width: 100%;
  font: inherit;
  padding: 20px 0;
  outline: none;
`;

const Instructions = styled.p`
  text-align: center;
  color: #aaa;
  font-size: 0.8em;
  margin: 20px 0 0;
`;

const Link = styled.a`
  color: #38c;
`;

export { TodoList };
