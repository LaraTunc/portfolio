import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Scene>
          <Cube>
            <Front></Front>
            <Back></Back>
            <Right></Right>
            <Left></Left>
            <Top></Top>
            <Bottom></Bottom>
          </Cube>
        </Scene>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  &:visited {
    text-decoration: none;
  }
`;

const rotateCube = keyframes`
  from {
    transform: rotateY(0deg) rotateX(0deg);
  }

  to {
    transform: rotateY(360deg) rotateX(180deg);
  }
`;

const cubeSize = "100px";
const halfDepth = "50px";
const colors = ["#FCEAAC", "#FDA802", "#E555C7", "#B7E7F7", "#C4C4C6"];

const Scene = styled.div`
  width: ${cubeSize};
  height: ${cubeSize};
  perspective: 600px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-${halfDepth});
  animation: ${rotateCube} 5s linear infinite;
`;

const Front = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: translateZ(${halfDepth});
`;
const Back = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: rotateY(180deg) translateZ(${halfDepth}); ;
`;
const Right = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: rotateY(90deg) translateZ(${halfDepth}); ;
`;
const Left = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: rotateY(-90deg) translateZ(${halfDepth}); ;
`;
const Top = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: rotateX(90deg) translateZ(${halfDepth}); ;
`;
const Bottom = styled.div`
  position: absolute;
  width: ${cubeSize};
  height: ${cubeSize};
  border: 1px solid white;
  box-shadow: 0 0 25px rgb(255, 255, 255, 0.4);
  transform: rotateX(-90deg) translateZ(${halfDepth}); ;
`;

export default Footer;
