import React from 'react';
import styled from 'styled-components/macro';
import Backdrop from 'Components/ui/Backdrop';

const SideDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70vw;
  background: ${(p) => p.theme.white};
  z-index: ${(p) => p.theme.zIndex.top};
`;
function SideDrawer() {
  return (
    <React.Fragment>
      <Backdrop />
      <SideDrawerContainer>Side</SideDrawerContainer>
    </React.Fragment>
  );
}

export default SideDrawer;
