import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

const GridList = styled(motion.div)`
  ${(p) => console.log(p)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: ${(p) => p.gap};
  padding: ${(p) => p.padding};
  max-width: ${(p) => p.maxWidth};
  width: max-content;
  background-color: ${() => rgba('black', 0.8)};
`;

GridList.propTypes = {
  min: PropTypes.string,
  gap: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default GridList;
