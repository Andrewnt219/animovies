import React, { useState } from 'react';
import AppBar from 'Components/navigation/AppBar/AppBar';
import SideDrawer from 'Components/navigation/SideDrawer/SideDrawer';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {/* <SideDrawer /> */}
      <AppBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      {children}
    </React.Fragment>
  );
}

export default MainLayout;
