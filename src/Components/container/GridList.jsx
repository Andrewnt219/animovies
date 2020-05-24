import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const GridList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(p) => p.min}, 1fr));
  gap: ${(p) => p.gap};
  padding: ${(p) => p.padding};
  max-width: ${(p) => p.maxWidth};
  font-size: inherit;
  /* width: max-content; */
`;

GridList.propTypes = {
  min: PropTypes.string,
  gap: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default GridList;
