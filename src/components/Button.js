import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  color: white;
  margin-top: 15px;
  height: 2em;
  border-radius: 5px;
  border: 1px solid rgb(252, 186, 3);
  padding: 0px 20px;
  background: inherit;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgb(252, 186, 3);
  }
  &:hover {
    box-shadow: 0 0 10px rgb(252, 186, 3);
  }
`;

export default Button;
