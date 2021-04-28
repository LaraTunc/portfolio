import React from "react";
import styled from "styled-components";
import Footer3 from "./Footer";
import Journey from "./Journey";
import Languages from "./Languages";

const About = () => {
  return (
    <Wrapper>
      <Img src="../.././decoration.PNG" alt="decoration" />
      <Title>About Me</Title>
      <Description>
        Full stack web developer, React lover, curious person <br />
        Special interests: scalability across large applications, abstraction,
        blockchain
        <br />
        Currently learning: PHP, SQL
      </Description>
      <Languages />
      <Journey />
      <Footer3 hoverColor={"#4e65d9"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 2%;
  right: 0%;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #4e65d9;
`;

const Description = styled.p`
  padding-top: 60px;
  font-size: 24px;
`;

export default About;
