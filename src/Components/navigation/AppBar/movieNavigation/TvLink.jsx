import React from 'react';
import AppBarNavItem from '../AppBarNavItem';
import { MdTv } from 'react-icons/md';

function TvLink() {
  return (
    <AppBarNavItem to="/tv">
      <MdTv />
      <span>TV Series</span>
    </AppBarNavItem>
  );
}

export default TvLink;
