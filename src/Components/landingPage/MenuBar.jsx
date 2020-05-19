import React from 'react';
import Fixed from 'Components/container/Fixed';
import NavItems from 'Components/navigation/NavItems';
import LandingLink from './LandingLink';

function MenuBar() {
  return (
    <Fixed bgColor="none" margin="2rem 0 0 0">
      <NavItems>
        <LandingLink to="/" exact>
          Movies
        </LandingLink>
        <LandingLink to="/anime">Anime</LandingLink>
      </NavItems>
    </Fixed>
  );
}

export default MenuBar;
