/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';

import Fixed from 'Components/container/Fixed';
import NavItems from 'Components/navigation/NavItems';
import LandingLink from './LandingLink';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders an AppBar for Landing page
function LandingAppBar() {
  return (
    <Fixed bgColor="none" margin="2rem 0 0 0">
      <NavItems>
        <LandingLink to="/tmdb" exact>
          Movies
        </LandingLink>

        <LandingLink to="/jikan" exact>
          Anime
        </LandingLink>
      </NavItems>
    </Fixed>
  );
}

export default LandingAppBar;
