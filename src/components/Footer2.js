import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Footer2 = () => {
  return (
    <Wrapper>
      <Div2>
        <Img src="../.././capture3.PNG" alt="developer woman" />
      </Div2>
      <Div3>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact-me">Contact</StyledLink>
      </Div3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  height: 400px;
  bottom: 0%;
  right: 0%;
`;

const Div2 = styled.div`
  z-index: +3;
`;

const Div3 = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  border-top: 5px solid #1b1b1b;
`;

const StyledLink = styled(NavLink)`
  font-size: 30px;
  margin-top: 10px;
  margin-right: 5%;
  text-decoration: none;
  color: black;
  &:hover {
    color: #4e65d9;
  }
  &:visited {
    text-decoration: none;
  }
`;

export default Footer2;
