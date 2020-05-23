import React from 'react';
import { MdHome } from 'react-icons/md';
import AppBarNavItem from '../AppBarNavItem';

function HomeLink() {
  return (
    <AppBarNavItem to="/">
      <MdHome />
      <span>Home</span>
    </AppBarNavItem>
  );
}

export default HomeLink;
