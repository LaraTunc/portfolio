import React from "react";
import styled from "styled-components";
import Footer2 from "./Footer2";

const Homepage = () => {
  return (
    <Wrapper>
      <Name>Lara Tunc</Name>
      <Title>Full Stack Web Developer</Title>
      <Div>
        <Footer2 />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

const Name = styled.h1`
  font-size: 130px;
`;

const Title = styled.p`
  font-size: 30px;
`;

const Div = styled.div`
  height: 100%;
`;

export default Homepage;
