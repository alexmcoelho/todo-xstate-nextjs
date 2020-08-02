import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

export const Checkbox = props => (
    <Wrapper>
        <Input {...props} type="checkbox" />
        <FakeInput />
    </Wrapper>
);

const Wrapper = styled.span`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

const FakeInput = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
  transition: all 200ms;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }

  &:hover::before {
    background: ${rgba("black", 0.5)};
  }

  ${Input}:checked + &::before {
    background: black;
  }

  ${Input}:disabled + & {
    opacity: 0.5;
  }

  ${Input}:disabled:hover + &::before {
    display: none;
  }
`;
