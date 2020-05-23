import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import React from 'react';

const StyledContainer = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchContainer({ children, className }) {
  return (
    <StyledContainer
      className={className}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </StyledContainer>
  );
}

export { SearchContainer };
