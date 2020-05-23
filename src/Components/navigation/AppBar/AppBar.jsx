import PropTypes from 'prop-types';

import { withTheme } from 'styled-components/macro';
import React, { useState } from 'react';
import SearchIcon from 'Components/ui/SearchIcon';
import HamburgerMenu from 'Components/ui/HamburgerMenu';
import { AppBarSearchBar } from './AppBarSearchBar';
import { FixedBar } from './FixedBar';
import { AppBarLogo } from './AppBarLogo';
import { AppBarNavItems } from './AppBarNavItems';
import { AnimatePresence } from 'framer-motion';
import FlexSpace from 'Components/ui/FlexSpace';
import AppBarNavItem from './AppBarNavItem';
import { MdHome, MdPlayArrow } from 'react-icons/md';
import { IoMdGlobe } from 'react-icons/io';
import { genreMap } from 'Apis/tmdb';
import AppBarSubMenu from './AppBarSubMenu/AppBarSubMenu';
import SubMenuItem from './AppBarSubMenu/SubMenuItem';

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
  let links = (
    <>
      <AppBarNavItem to="/">
        <MdHome />
        <span>Home</span>
      </AppBarNavItem>

      <AppBarSubMenu
        Icon={MdPlayArrow}
        title="Genre"
        offsetTop={FIXED_BAR_HEIGHT}
      >
        {Object.values(genreMap).map((genre) => (
          <SubMenuItem to={{ pathname: `/movies/${genre.name}` }}>
            {genre.name}
          </SubMenuItem>
        ))}
      </AppBarSubMenu>

      <AppBarNavItem to="/">
        <IoMdGlobe />
        <span>Country</span>
      </AppBarNavItem>
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
        <SearchIcon
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setisSearchOpen}
        />
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
