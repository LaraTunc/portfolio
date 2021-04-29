import React from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";

const Journey = () => {
  return (
    <>
      <Title2>My Journey</Title2>

      <Wrapper>
        <Quarter>
          <FaGraduationCap size={50} />
          <p>
            <b>Lara graduates McGill University</b>
          </p>
          <p>
            Being a millenial, she feels personally responsible to not want to
            work in the field she studied - finance and marketing.
          </p>
        </Quarter>
        <Quarter>
          <BsBagFill size={50} />
          <p>
            <b>Lara starts first job at an e-commerce</b>
          </p>
          <p>
            She is introduced to the community of web-development through the
            friends she makes at this company.
          </p>
        </Quarter>
        <Quarter>
          <RiCodeBoxFill size={50} />
          <p>
            <b>Lara starts her first web development e-course</b>
          </p>
          <p>
            After some time of thinking how cool the web development world
            seems, she finally takes her first step towards meeting it.
          </p>
        </Quarter>
        <Quarter>
          <AiFillHeart size={50} />
          <p>
            <b>
              Lara falls in love with web development and signs up for a
              bootcamp
            </b>
          </p>
          <p>
            After taking a series of e-courses Lara decides she cannot do
            anything else in life and signs up for a bootcamp.
          </p>
        </Quarter>
      </Wrapper>
    </>
  );
};

const Title2 = styled.h3`
  font-size: 30px;
  padding-top: 80px;
`;

const Wrapper = styled.div`
  padding-top: 3%;
  display: flex;
`;

const Quarter = styled.div`
  flex: 1;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    text-align: center;
    padding-top: 15px;
    line-height: 1.5;
  }
  & span {
    font-weight: bold;
  }
`;

export default Journey;
