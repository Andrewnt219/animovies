/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import { MdHome } from 'react-icons/md';

import AppBarNavItem from '../AppBarNavItem';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a link to /
function HomeLink() {
  return (
    <AppBarNavItem to="/tmdb/all">
      <MdHome />

      <span>Home</span>
    </AppBarNavItem>
  );
}

export default HomeLink;
