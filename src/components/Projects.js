import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <Item1>
        <Logo>
          <Anchor href="https://larasgame.netlify.app/">
            <Img src="../.././game.png" alt="game langing page" />
          </Anchor>
        </Logo>
        <Text>
          <span>Lara's Game</span>
          <br />
          This is an OOP Shoot 'em up game. It is themed after{" "}
          <Anchor href="https://www.youtube.com/watch?v=TUVcZfQe-Kw">
            Dua Lipa's Levitating
          </Anchor>
          music video. <br />
          It was created to be submitted as my 1st project for my bootcamp.{" "}
          <br />
          Deployment date: 29 Oct 2020.
        </Text>
      </Item1>
      <Item2>
        <Text>
          <span>Lara's Cards</span>
          <br />
          This is a full stack React app which was created as my final project
          for my bootcamp. <br />
          The app allows the user to send e-cards via email to selected
          recipients.
          <br />
          Deployment date: 20 Apr 2021.
        </Text>
        <Logo>
          <Anchor href="https://larascards.netlify.app/">
            <Img src="../.././cards.png" alt="cards landing page" />
          </Anchor>
        </Logo>
      </Item2>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0% 3%;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: 40px;
  color: rgb(252, 186, 3);
`;

const Item1 = styled.div`
  display: flex;
  border-radius: 15px;
  background: linear-gradient(90deg, rgb(32, 28, 28) 80%, rgb(43, 38, 38));
  padding: 15px;
  margin: 20px 0px;
`;

const Item2 = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  background: linear-gradient(90deg, rgb(43, 38, 38), rgb(32, 28, 28) 20%);
  padding: 15px;
  margin: 20px 0px;
`;

const Logo = styled.div`
  width: 35%;
  margin: 0px 15px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Text = styled.div`
  line-height: 2;
  margin: 0px 45px;
  font-family: "Roboto";
  & span {
    font-weight: bold;
    border-bottom: 1px solid white;
  }
`;

const Anchor = styled.a`
  color: white;
  font-family: "Roboto";
  &:hover {
    transform: scale(1.1);
  }
`;

export default Projects;
