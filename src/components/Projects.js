import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const Projects = () => {
  return (
    <Wrapper>
      <Decoration src='../.././img/decoration2.PNG' alt='decoration' />
      <Title>Projects</Title>
      <Item1>
        <Logo>
          <Anchor href='https://larasgame.netlify.app/'>
            <Img src='../.././img/game.png' alt='game langing page' />
          </Anchor>
        </Logo>
        <Text>
          <span>Lara's Game</span>
          <br />
          This is an OOP game similar to space invaders. It is themed after{' '}
          <Anchor href='https://www.youtube.com/watch?v=TUVcZfQe-Kw'>
            Dua Lipa's Levitating
          </Anchor>{' '}
          music video. <br />
          It was created to be submitted as my 1st project for my bootcamp.{' '}
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
          <b>React.js, Node.js, Express, Nodemailer, MongoDB</b>
          <br />
          Deployment date: 20 Apr 2021.
        </Text>
        <Logo>
          <Anchor href='https://larascards.netlify.app/'>
            <Img src='../.././img/cards.png' alt='cards landing page' />
          </Anchor>
        </Logo>
      </Item2>
      <Footer hoverColor={'#4e65d9'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
  position: relative;
`;

const Decoration = styled.img`
  position: absolute;
  top: 0%;
  right: 5%;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #4e65d9;
`;

const Item1 = styled.div`
  display: flex;
  padding-top: 12%;
`;

const Item2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12%;
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
  line-height: 1.5;
  margin: 0px 45px;
  & span {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
`;

const Anchor = styled.a`
  color: inherit;
  &:hover {
    transform: scale(1.02);
  }
`;

export default Projects;
