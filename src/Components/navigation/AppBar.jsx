import styled, { withTheme } from 'styled-components/macro';
import React from 'react';
import NavItems from './NavItems';
import StyledLink from './StyledLink';
import Logo from 'Components/ui/Logo';
import SearchIcon from 'Components/ui/SearchIcon';
import HamburgerMenu from 'Components/ui/HamburgerMenu';
const FixedBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: max(6rem, 6vw);
  background: ${(p) => p.theme.secondary};
  z-index: ${(p) => p.theme.zIndex.high};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppBarLogo = styled(Logo)`
  background: ${(p) => p.theme.primary};
  border-radius: 0;
  height: 100%;
`;

const AppBarNavItems = styled(NavItems)`
  display: none;
`;

function AppBar({ theme, isOpen, setIsOpen }) {
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
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <AppBarLogo isInverted size="1.5rem" />
      <SearchIcon />
      <AppBarNavItems>{links}</AppBarNavItems>
    </FixedBar>
  );
}

export default withTheme(AppBar);
