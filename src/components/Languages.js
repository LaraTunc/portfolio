import React from "react";
import styled from "styled-components";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const Languages = () => {
  return (
    <>
      <Title2>Languages</Title2>
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
    </>
  );
};

const Title2 = styled.h3`
  font-size: 30px;
  padding-top: 60px;
`;

const LanguagesWrapper = styled.div`
  padding-top: 3%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Language = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export default Languages;
