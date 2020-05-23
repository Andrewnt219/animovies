import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/macro';
import React from 'react';
import NavItems from './NavItems';
import StyledLink from './StyledLink';
import Logo from 'Components/ui/Logo';
import SearchIcon from 'Components/ui/SearchIcon';
import HamburgerMenu from 'Components/ui/HamburgerMenu';
import Input from 'Components/ui/Input';
import SearchBar from 'Components/ui/SearchBar/SearchBar';

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
  padding: 0 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding-left: 0;
  }
`;

const AppBarLogo = styled(Logo)`
  border-radius: 0;
  height: 100%;

  &,
  & > * {
    font-size: min(8vw, 3rem);
  }

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    background: ${(p) => p.theme.primary};

    div {
      background: ${(p) => p.theme.white};
      color: ${(p) => p.theme.primary};
    }
  }
`;

const AppBarNavItems = styled(NavItems)`
  display: none;
`;

// const SearchBar = styled(Input)`
//   position: fixed;
//   /* the height of FixedBar */
//   top: max(6rem, 6vw);
//   left: 0;
//   /* Same as FixedBar */
//   z-index: ${(p) => p.theme.zIndex.high};
//   width: 100vw;
// `;
// const SearchForm = styled.form``;

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
    <>
      <FixedBar>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <AppBarLogo />
        <SearchIcon />
        <AppBarNavItems>{links}</AppBarNavItems>
      </FixedBar>
      <SearchBar />
    </>
  );
}

AppBar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  theme: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default withTheme(AppBar);
