import React from 'react';
import SideDrawerItem from '../SideDrawerItem';
import { renderSubMenuItems } from 'Components/navigation/AppBar/movieNavigation/GenreDropDownMenu';
import StyledNavLink from 'Components/navigation/StyledNavLink.jsx';

function MovieSideDrawer() {
  return (
    <>
      <SideDrawerItem title="Home" as={StyledNavLink} to="/" />
      <SideDrawerItem title="TV Series" as={StyledNavLink} to="/tv" />
      <SideDrawerItem title="Genre">{renderSubMenuItems()}</SideDrawerItem>
    </>
  );
}

export default MovieSideDrawer;
