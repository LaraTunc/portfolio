import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from './Footer';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';

const ContactMe = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <Title>Contact Me</Title>
        <Wrapper3>
          <Item>
            <AiOutlineMail size={50} color={'white'} />
            <Div>
              <Anchor href='mailto:laratunc@gmail.com'>
                Email <BsArrowUpRight size={30} />
              </Anchor>
            </Div>
          </Item>
          <Item>
            <AiOutlineLinkedin size={50} color={'white'} />
            <Div>
              <Anchor href='https://www.linkedin.com/in/laratunc/'>
                LinkedIn <BsArrowUpRight size={30} />
              </Anchor>
            </Div>
          </Item>
          <Item>
            <AiFillGithub size={50} color={'white'} />
            <Div>
              <Anchor href='https://github.com/LaraTunc'>
                {' '}
                Github <BsArrowUpRight size={30} />
              </Anchor>
            </Div>
          </Item>
        </Wrapper3>
      </Wrapper2>
      <Footer linkColor={'white'} hoverColor={'#30d5c8'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
  background: #4e65d9;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3%;
`;

const Title = styled.div`
  flex: 2;
  font-size: 80px;
  color: white;
  text-align: center;
`;

const Wrapper3 = styled.div`
  flex: 1;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 35px;
`;

const Div = styled.div`
  & :hover {
    color: #30d5c8;
  }
`;

const Anchor = styled.a`
  margin-left: 20px;
  color: inherit;
  text-decoration: none;
`;

export default ContactMe;
