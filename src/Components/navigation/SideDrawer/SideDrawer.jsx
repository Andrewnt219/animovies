/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import Backdrop from 'Components/ui/Backdrop';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a left-pop-up SideDrawer with grid-menus and links inside
function SideDrawer({ children, setIsMenuOpen, bgColor, ...animation }) {
  return (
    <>
      <Backdrop handleClick={setIsMenuOpen.bind(this, false)} />

      <SideDrawerContainer
        {...animation}
        onClick={() => setIsMenuOpen(false)}
        bgColor={bgColor}
      >
        {children()}
      </SideDrawerContainer>
    </>
  );
}

/* --------------------------------- STYLING -------------------------------- */
const SideDrawerContainer = styled(motion.div)`
  background-color: ${(p) => p.bgColor ?? p.theme.dark};

  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndex.top};
  height: 100vh;
  width: 70vw;
  padding: 0 1rem;
  overflow: auto;
`;

/* -------------------------------- VALIDATE -------------------------------- */
SideDrawer.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.func,
  setIsMenuOpen: PropTypes.func,
};

export default SideDrawer;
