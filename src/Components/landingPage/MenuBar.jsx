import React from 'react';
import NavBar from 'Components/navigation/NavBar';
import NavItems from 'Components/navigation/NavItems';
import LandingLink from './LandingLink';

function MenuBar() {
  return (
    <NavBar bgColor="none">
      <NavItems>
        <LandingLink to="/" exact>
          Movies
        </LandingLink>
        <LandingLink to="/anime">Anime</LandingLink>
      </NavItems>
    </NavBar>
  );
}

export default MenuBar;
