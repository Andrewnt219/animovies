import React from 'react';
import SideDrawerItem from '../SideDrawerItem';
import { renderSubMenuItems } from 'Components/navigation/AppBar/movieNavigation/GenreDropDownMenu';
import StyledLink from 'Components/navigation/StyledLink';

function MovieSideDrawer() {
  return (
    <>
      <SideDrawerItem title="Home" as={StyledLink} to="/" />
      <SideDrawerItem title="TV Series" as={StyledLink} to="/tv" />
      <SideDrawerItem title="Genre">{renderSubMenuItems()}</SideDrawerItem>
    </>
  );
}

export default MovieSideDrawer;
