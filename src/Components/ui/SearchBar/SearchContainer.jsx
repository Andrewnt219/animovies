/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import React from 'react';
import { animation } from 'Theme/variants';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a form for SearchBar
function SearchContainer({ children, className }) {
  return (
    <StyledContainer
      className={className}
      variants={animation.popup.fromBottom}
      initial="initial"
      animate="enter"
      exit="exit"
      transition="transition"
    >
      {children}
    </StyledContainer>
  );
}

/* --------------------------------- STYLING -------------------------------- */
const StyledContainer = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* -------------------------------- VALIDATE -------------------------------- */
SearchContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export { SearchContainer };
