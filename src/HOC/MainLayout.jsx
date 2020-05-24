import React, { useState } from 'react';
import AppBar from 'Components/navigation/AppBar/AppBar';
import SideDrawer from 'Components/navigation/SideDrawer/SideDrawer';
import MovieSideDrawer from 'Components/navigation/SideDrawer/movieNavigation/MovieSideDrawer';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {isMenuOpen && (
        <SideDrawer children={MovieSideDrawer} setIsMenuOpen={setIsMenuOpen} />
      )}
      <AppBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      {children}
    </React.Fragment>
  );
}

export default MainLayout;
