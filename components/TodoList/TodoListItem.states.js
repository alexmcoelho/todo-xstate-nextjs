import React, { useEffect, useRef } from "react";
import { useService } from "@xstate/react";
import styled from "styled-components";
import { Form } from "../Form";

const ReadState = ({ service }) => {
    const [machine, send] = useService(service);
    const { title, isComplete } = machine.context;
    const mark = isComplete ? "completed" : "";
    const dataTodo = isComplete ? "completed" : "active";

    return (
        <li className={mark} data-todo-state={dataTodo}>
            <div className="view" onDoubleClick={() => send("EDIT")}>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={isComplete}
                    onChange={event => send({ type: "TOGGLE", data: event.target.checked })}
                />
                <label>{title}</label>
            </div>
            <button className="destroy" onClick={() => send("DELETE")} />
        </li>
    );
};

const EditState = ({ service }) => {
    const [machine, send] = useService(service);
    const { title, isComplete } = machine.context;
    const inputRef = useRef();

    useEffect(() => {
        const actions = machine.actions.map(action => action.type);

        if (actions.includes("handleInputFocus")) {
            inputRef.current.focus();
        }
    }, [machine.actions]);

    return (
        <li className="editing completed">
            <EditForm
                onSubmit={data => send({ type: "TITLE_CHANGE", data: data.title })}
            >
                <Input
                    ref={inputRef}
                    name="title"
                    className="edit focus-visible"
                    defaultValue={title}
                    onBlur={() => send("TITLE_BLUR")}
                    data-focus-visible-added
                />
            </EditForm>
        </li>
    );
};

const EditForm = styled(Form)`
  order: 1;
  flex: 1 1 auto;
`;

const Input = styled.input.attrs(() => ({ type: "text" }))`
  border: 0;
  font: inherit;
  margin: -5px 0 -5px -5px;
  padding: 5px;
  width: 100%;
`;

export const todoListItemStateComponents = {
    init: ReadState,
    read: ReadState,
    edit: EditState
};
