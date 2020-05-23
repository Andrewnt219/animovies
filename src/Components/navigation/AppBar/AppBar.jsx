import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/macro';
import React, { useState } from 'react';
import StyledLink from '../StyledLink';
import SearchIcon from 'Components/ui/SearchIcon';
import HamburgerMenu from 'Components/ui/HamburgerMenu';
import { AppBarSearchBar } from './AppBarSearchBar';
import { FixedBar } from './FixedBar';
import { AppBarLogo } from './AppBarLogo';
import { AppBarNavItems } from './AppBarNavItems';
import { AnimatePresence } from 'framer-motion';

function AppBar({ theme, isOpen, setIsOpen }) {
  const [isSearchOpen, setisSearchOpen] = useState(false);

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

  const FIXED_BAR_HEIGHT = 'max(6rem, 6vw)';
  return (
    <>
      <FixedBar height={FIXED_BAR_HEIGHT}>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <AppBarLogo />
        <SearchIcon setIsSearchOpen={setisSearchOpen} />
        <AppBarNavItems>{links}</AppBarNavItems>
      </FixedBar>

      <AnimatePresence>
        {isSearchOpen && (
          <AppBarSearchBar
            offsetTop={FIXED_BAR_HEIGHT}
            fontSize="clamp(1.5rem, 3vw,2rem)"
          />
        )}
      </AnimatePresence>
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
