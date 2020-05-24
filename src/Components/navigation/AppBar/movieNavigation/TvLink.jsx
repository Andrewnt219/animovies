/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import { MdTv } from 'react-icons/md';

import AppBarNavItem from '../AppBarNavItem';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a link to /tv
function TvLink() {
  return (
    <AppBarNavItem to="/tv">
      <MdTv />

      <span>TV Series</span>
    </AppBarNavItem>
  );
}

export default TvLink;
