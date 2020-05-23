import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

const SubMenu = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3rem;
  padding: 3rem;
  max-width: 50vw;
  width: max-content;
  left: 0;
  background-color: ${() => rgba('black', 0.8)};
  top: ${(p) => p.offsetTop};
`;

SubMenu.propTypes = {
  offsetTop: PropTypes.string,
};

export default SubMenu;
