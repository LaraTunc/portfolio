import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Confirmation = () => {
  return (
    <Wrapper>
      <Title>Your message has been successfully sent!</Title>
      <StyledLink to="/">
        <Button>Click the below cube to return to homepage.</Button>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Title = styled.h1`
  margin-top: 30px;
`;

export default Confirmation;
