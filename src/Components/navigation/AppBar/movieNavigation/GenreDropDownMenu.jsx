/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import { MdPlayArrow } from 'react-icons/md';

import AppBarSubMenu from '../AppBarSubMenu/DropDownMenu';
import SubMenuItem from '../AppBarSubMenu/SubMenuItem';

import { genreMap } from 'Apis/tmdb';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a popup grid-menu with links to genres
function GenreSubMenu({ offsetTop }) {
  return (
    <AppBarSubMenu Icon={MdPlayArrow} title="Genre" offsetTop={offsetTop}>
      {renderSubMenuItems()}
    </AppBarSubMenu>
  );
}

// NOTE renders a list of genres
export function renderSubMenuItems() {
  return Object.values(genreMap).map((genre) => (
    <SubMenuItem key={genre.id} to={{ pathname: `/movies/${genre.name}` }}>
      {genre.name}
    </SubMenuItem>
  ));
}

export default GenreSubMenu;
