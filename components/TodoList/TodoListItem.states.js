import React, { useEffect, useRef } from "react";
import { useService } from "@xstate/react";
import styled from "styled-components";
import { rgba } from "polished";
import { visuallyHidden } from "../../styles";
import { Form } from "../Form";
import { Checkbox } from "../Checkbox";

const ReadState = ({ service }) => {
    const [machine, send] = useService(service);
    const { title, isComplete } = machine.context;

    return (
        <ListItem>
            <Title isComplete={isComplete} onDoubleClick={() => send("EDIT")}>
                {title}
            </Title>
            <CompleteToggle
                checked={isComplete}
                onChange={event => send({ type: "TOGGLE", data: event.target.checked })}
            />
            <DeleteButton onClick={() => send("DELETE")} />
        </ListItem>
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
        <ListItem>
            <EditForm
                onSubmit={data => send({ type: "TITLE_CHANGE", data: data.title })}
            >
                <Input
                    ref={inputRef}
                    name="title"
                    defaultValue={title}
                    onBlur={() => send("TITLE_BLUR")}
                />
            </EditForm>
            <CompleteToggle checked={isComplete} disabled />
        </ListItem>
    );
};

const ListItem = styled.li`
  display: flex;
  padding: 20px 10px;
  border-top: 1px solid #eee;
  align-items: center;
`;

const Title = styled.span`
  order: 1;
  flex: 1 1 auto;
  text-decoration: ${props => props.isComplete && `line-through`};
  cursor: default;
`;

const CompleteToggle = props => (
    <label>
        <Checkbox {...props} />
        <CompleteToggleLabelText>Done</CompleteToggleLabelText>
    </label>
);

const CompleteToggleLabelText = styled.span`
  ${visuallyHidden()};
`;

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

const DeleteButton = styled.button.attrs(() => ({
    type: "button",
    children: "Excluir"
}))`
  border: 1px solid #ddd;
  font: inherit;
  font-size: 0.8em;
  border-radius: 3px;
  padding: 5px 10px;
  margin: -5px 0;
  order: 2;

  ${ListItem}:not(:hover) & {
    display: none;
  }

  &:hover {
    background: ${rgba("red", 0.5)};
    border-color: ${rgba("red", 0.5)};
  }
`;

export const todoListItemStateComponents = {
    init: ReadState,
    read: ReadState,
    edit: EditState
};
