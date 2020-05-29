/* --------------------------------- IMPORT --------------------------------- */
import React, { useState } from 'react';

import AppBar from 'Components/navigation/AppBar/AppBar';
import SideDrawer from 'Components/navigation/SideDrawer/SideDrawer';
import MovieSideDrawer from 'Components/navigation/SideDrawer/movieNavigation/MovieSideDrawer';
import { AnimatePresence, motion } from 'framer-motion';
import { animation } from 'Theme/variants';
import styled from 'styled-components/macro';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the shared Layout (e.g. Navigation, Footer, ...)
function MainLayout({ children }) {
  /**
   * States
   */
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);
  const FIXED_BAR_HEIGHT = 'max(6rem, 5vw)';

  return (
    <motion.div
      variants={animation.popup.fromBottom}
      initial="initial"
      animate="enter"
      transition="duration"
    >
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

      <AppBar
        barHeight={FIXED_BAR_HEIGHT}
        isOpen={sideDrawerIsOpen}
        setIsOpen={setSideDrawerIsOpen}
      />
      <Main offsetTop={FIXED_BAR_HEIGHT}>{children}</Main>
    </motion.div>
  );
}

const Main = styled.main`
  margin-top: ${(p) => p.offsetTop};
`;

export default MainLayout;
