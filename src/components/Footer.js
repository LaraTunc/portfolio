import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Footer = ({ linkColor, hoverColor }) => {
  return (
    <Wrapper>
      <Div linkColor={linkColor} />
      <Div2>
        <Div3>
          <StyledLink to='/about' linkColor={linkColor} hoverColor={hoverColor}>
            About
          </StyledLink>
          <StyledLink
            to='/projects'
            linkColor={linkColor}
            hoverColor={hoverColor}
          >
            Projects
          </StyledLink>
          <StyledLink
            to='/contact-me'
            linkColor={linkColor}
            hoverColor={hoverColor}
          >
            Contact
          </StyledLink>
        </Div3>
        <StyledLink2 to='/' linkColor={linkColor} hoverColor={hoverColor}>
          Home
        </StyledLink2>
      </Div2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 7%;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 85%;
  border-bottom: 5px solid ${({ linkColor }) => linkColor};
  z-index: +5;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div3 = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  font-size: 30px;
  padding-top: 10px;
  padding-right: 35px;
  padding-bottom: 10px;
  text-decoration: none;
  color: ${({ linkColor }) => (linkColor ? linkColor : 'black')};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  &:visited {
    text-decoration: none;
  }
`;

const StyledLink2 = styled(NavLink)`
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: ${({ linkColor }) => (linkColor ? linkColor : 'black')};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
  &:visited {
    text-decoration: none;
  }
`;

export default Footer;
