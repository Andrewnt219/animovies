import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import Backdrop from 'Components/ui/Backdrop';

const SideDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70vw;
  background-color: ${(p) => p.bgColor ?? p.theme.dark};
  z-index: ${(p) => p.theme.zIndex.top};
  padding: 0 1rem;
  overflow: auto;
`;
function SideDrawer({ children, setIsMenuOpen, bgColor }) {
  return (
    <React.Fragment>
      <Backdrop handleClick={setIsMenuOpen.bind(this, false)} />
      <SideDrawerContainer
        onClick={() => setIsMenuOpen(false)}
        bgColor={bgColor}
      >
        {children()}
      </SideDrawerContainer>
    </React.Fragment>
  );
}

SideDrawer.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.func,
  setIsMenuOpen: PropTypes.func,
};

export default SideDrawer;
