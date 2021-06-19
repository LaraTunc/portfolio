import React from 'react';
import styled from 'styled-components';
import Footer3 from './Footer';
import Journey from './Journey';
import Languages from './Languages';

const About = () => {
  return (
    <Wrapper>
      <Img src='../.././Lara_Tunc.jpg' alt='headshot' />
      <Img2 src='../.././img/decoration.PNG' alt='decoration' />
      <Title>About Me</Title>
      <Description>
        I am a full stack developer who is passionate about finding solutions to
        real life problems with web technologies. I love learning new things and
        employing my skills to help people 👩‍💻
        <br />
        Currently working on: chrome extensions
      </Description>
      <Languages />
      <Journey />
      <Footer3 hoverColor={'#4e65d9'} />
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
  height: 25%;
  top: 2%;
  right: 2%;
`;

const Img2 = styled.img`
  position: absolute;
  top: 0%;
  right: 30%;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #4e65d9;
`;

const Description = styled.p`
  padding-top: 60px;
  font-size: 24px;
  width: 75%;
`;

export default About;
