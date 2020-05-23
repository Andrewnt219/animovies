import React from 'react';
import AppBarSubMenu from '../AppBarSubMenu/DropDownMenu';
import { MdPlayArrow } from 'react-icons/md';
import SubMenuItem from '../AppBarSubMenu/SubMenuItem';
import { genreMap } from 'Apis/tmdb';

function GenreSubMenu({ offsetTop }) {
  return (
    <AppBarSubMenu Icon={MdPlayArrow} title="Genre" offsetTop={offsetTop}>
      {renderSubMenuItems()}
    </AppBarSubMenu>
  );
}

function renderSubMenuItems() {
  return Object.values(genreMap).map((genre) => (
    <SubMenuItem key={genre.id} to={{ pathname: `/movies/${genre.name}` }}>
      {genre.name}
    </SubMenuItem>
  ));
}

export default GenreSubMenu;
