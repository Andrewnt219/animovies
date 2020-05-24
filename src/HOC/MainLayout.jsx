import React, { useState } from 'react';
import AppBar from 'Components/navigation/AppBar/AppBar';
import SideDrawer from 'Components/navigation/SideDrawer/SideDrawer';
import MovieSideDrawer from 'Components/navigation/SideDrawer/movieNavigation/MovieSideDrawer';
import { AnimatePresence } from 'framer-motion';
import { animation } from 'Theme/variants';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <SideDrawer
            variants={animation.popup.fromLeft}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3 }}
            children={MovieSideDrawer}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </AnimatePresence>
      <AppBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      {children}
    </>
  );
}

export default MainLayout;
