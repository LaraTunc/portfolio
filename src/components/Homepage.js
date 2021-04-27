import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <Wrapper>
      <Section1>
        <Wrapper2>
          <Img src="../.././Lara_Tunc_5233.jpg" alt="portrait" />
        </Wrapper2>
        <Wrapper3>
          <h1>
            <span>Hello!</span> <br /> My name is Lara Tunc. I am a web
            developer. <br /> I love learning new things, coffee and fantasy
            books. <br /> For more please scrool down 🦑
          </h1>
        </Wrapper3>
      </Section1>
      <Section2>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact-me">Contact</StyledLink>
      </Section2>
      <Footer />
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} linear 3s;
`;

const Section1 = styled.div`
  display: flex;
  padding: 5%;
`;

const Img = styled.img`
  display: block;
  max-height: 500px;
`;

const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  & span {
    color: rgb(252, 186, 3);
  }
`;

const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15%;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  text-align: center;
  font-size: 50px;
  text-decoration: none;
  color: white;
  &:hover {
    color: rgb(252, 186, 3);
    transform: scale(1.3);
  }
  &:visited {
    text-decoration: none;
  }
`;

export default Homepage;
