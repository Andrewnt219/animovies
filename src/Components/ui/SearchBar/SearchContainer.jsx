import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import React from 'react';
import { animation } from 'Theme/variants';

const StyledContainer = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export { SearchContainer };
