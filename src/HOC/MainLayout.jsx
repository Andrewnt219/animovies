/* --------------------------------- IMPORT --------------------------------- */
import React, { useState } from 'react';

import AppBar from 'Components/navigation/AppBar/AppBar';
import SideDrawer from 'Components/navigation/SideDrawer/SideDrawer';
import MovieSideDrawer from 'Components/navigation/SideDrawer/movieNavigation/MovieSideDrawer';
import { AnimatePresence } from 'framer-motion';
import { animation } from 'Theme/variants';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the shared Layout (e.g. Navigation, Footer, ...)
function MainLayout({ children }) {
  /**
   * States
   */
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {sideDrawerIsOpen && (
          <SideDrawer
            // * framer-motion
            variants={animation.popup.fromLeft}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3 }}
            // * component to render (base on theme)
            children={MovieSideDrawer}
            // * handleClick
            setIsMenuOpen={setSideDrawerIsOpen}
          />
        )}
      </AnimatePresence>

      <AppBar isOpen={sideDrawerIsOpen} setIsOpen={setSideDrawerIsOpen} />
      {children}
    </>
  );
}

export default MainLayout;
