/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a fullscreen backdrop
function Backdrop({ handleClick, children }) {
  return <StyledBackdrop onClick={handleClick}>{children}</StyledBackdrop>;
}

/* --------------------------------- STYLING -------------------------------- */
const StyledBackdrop = styled.div`
  z-index: ${(p) => p.index ?? p.theme.zIndex.high};

  content: '';
  width: 100vw;
  height: 100vh;
  background: ${(p) => rgba(p.theme.black, 0.8)};
  position: fixed;
  top: 0;
  left: 0;
`;

/* -------------------------------- VALIDATE -------------------------------- */
Backdrop.propTypes = {
  index: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Backdrop;
