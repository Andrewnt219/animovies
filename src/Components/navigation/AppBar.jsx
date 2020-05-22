import styled, { withTheme } from 'styled-components/macro';
import React from 'react';
import NavItems from './NavItems';
import StyledLink from './StyledLink';
import { Switch } from 'react-router-dom';
import Logo from 'Components/ui/Logo';

const FixedBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: max(5rem, 5vw);
  background: ${(p) => p.theme.secondary};
  z-index: ${(p) => p.theme.zIndex.high};
`;

function AppBar({ theme }) {
  let links = (
    <>
      <StyledLink to="/">Genre</StyledLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Country</StyledLink>
    </>
  );
  if (theme.name === 'anime') {
    links = (
      <>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Anime</StyledLink>
        <StyledLink to="/">Manga</StyledLink>
      </>
    );
  }
  return (
    <FixedBar>
      <Logo />
      <NavItems>{links}</NavItems>
    </FixedBar>
  );
}

export default withTheme(AppBar);
