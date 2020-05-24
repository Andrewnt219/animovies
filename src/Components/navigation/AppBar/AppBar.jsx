/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { withTheme } from 'styled-components/macro';
import React, { useState } from 'react';

import { FixedBar } from './FixedBar';
import FlexSpace from 'Components/ui/FlexSpace';
import HamburgerMenu from 'Components/ui/HamburgerMenu';
import { AppBarLogo } from './AppBarLogo';

import { AppBarSearchBar } from './AppBarSearchBar';
import SearchIcon from 'Components/ui/SearchIcon';

import { AppBarNavItems } from './AppBarNavItems';
import AppBarNavItem from './AppBarNavItem';
import GenreSubMenu from './movieNavigation/GenreDropDownMenu';
import HomeLink from './movieNavigation/HomeLink';
import TvLink from './movieNavigation/TvLink';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders an AppBar for main Layout
function AppBar({ theme, isOpen, setIsOpen }) {
  /**
   * States
   */
  const [isSearchOpen, setisSearchOpen] = useState(false);

  /**
   * Constants
   */
  const FIXED_BAR_HEIGHT = 'max(6rem, 5vw)';

  /**
   * Conditional rendering
   */
  // * render different navigation items for each theme
  let links = (
    <>
      <HomeLink />
      <TvLink />
      <GenreSubMenu offsetTop={FIXED_BAR_HEIGHT} />
    </>
  );
  if (theme.name === 'anime') {
    links = (
      <>
        <AppBarNavItem to="/">Home</AppBarNavItem>
        <AppBarNavItem to="/">Anime</AppBarNavItem>
        <AppBarNavItem to="/">Manga</AppBarNavItem>
      </>
    );
  }

  return (
    <>
      <FixedBar height={FIXED_BAR_HEIGHT}>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <AppBarLogo />

        <AppBarNavItems>{links}</AppBarNavItems>

        <FlexSpace breakpoint={theme.breakpoints.md} />

        <SearchIcon setIsSearchOpen={setisSearchOpen} />
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

/* -------------------------------- VALIDATE -------------------------------- */
AppBar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  theme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      md: PropTypes.string,
    }),
    name: PropTypes.string,
  }),
};

export default withTheme(AppBar);
