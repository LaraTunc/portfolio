import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const About = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Description>
        My favourite developing language is React because of the modularity it
        offers. I like developing full stack.
        <br />
        I believe in editing code as many times as possible for readable,
        organized and concise code optimal for collaboration.
        <br /> My special interests are: scalability and abstraction.
        <br />
        Currently, I am working on expanding my repertoire of languages (php,
        SQL).
        <br />
        Eventually, I would like to learn more about blockchain.
      </Description>
      <Title>Languages</Title>
      <LanguagesWrapper>
        <Language>
          <AiOutlineHtml5 size={70} />
          <span>HTML5</span>
        </Language>
        <Language>
          <IoLogoCss3 size={70} />
          <span>CSS</span>
        </Language>
        <Language>
          <DiJavascript1 size={70} />
          <span>Javascript</span>
        </Language>
        <Language>
          <DiReact size={70} />
          <span>React</span>
        </Language>
        <Language>
          <FaNode size={70} />
          <span>Node.js</span>
        </Language>
        <Language>
          <SiRedux size={70} />
          <span>Redux.js</span>
        </Language>
        <Language>
          <DiMongodb size={70} />
          <span>MongoDb</span>
        </Language>
        <Language>
          <SiFirebase size={70} />
          <span>Firebase</span>
        </Language>
        <Language>
          <CgCPlusPlus size={70} />
          <span>C++</span>
        </Language>
      </LanguagesWrapper>
      <Title>Education</Title>
      <Item>
        <Logo>
          <Img src="../.././decode2.png" alt="mcgill logo" />
        </Logo>
        <Text>
          <span>
            Concordia University – Journey Education (Sep 2020- Apr 2021)
          </span>
          <br />
          <i>Web Development Diploma - Full-Stack Web Development</i>
        </Text>
      </Item>
      <Item>
        <Logo>
          <Img src="../.././McGill_logo.png" alt="mcgill logo" />
        </Logo>
        <Text>
          <span>McGill University (2014-2018)</span>
          <br />
          <i>
            Bachelor of Commerce, Major in Marketing, Concentration in Finance
          </i>
        </Text>
      </Item>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0% 3%;
`;

const Title = styled.h1`
  margin: 30px 0px;
  font-weight: bold;
  color: rgb(252, 186, 3);
`;

const Description = styled.h6`
  font-family: "Roboto";
  font-weight: lighter;
`;

const LanguagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px 0px;
`;

const Language = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    margin: 10px 0px;
  }
`;

const Item = styled.div`
  display: flex;
  border-radius: 15px;
  background: linear-gradient(
    90deg,
    rgb(32, 28, 28),
    rgb(43, 38, 38),
    rgb(32, 28, 28)
  );
  padding: 15px;
  margin: 20px 0px;
`;

const Logo = styled.div`
  width: 100px;
  margin: 0px 15px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
`;

const Text = styled.div`
  line-height: 2;
  & span {
    font-weight: bold;
    border-bottom: 1px solid white;
  }
`;

export default About;
