import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Paper } from 'Components/container/Paper';

const NavBar = styled(Paper)`
  position: fixed;
  background: ${(p) => p.bgColor ?? p.theme.primary};
  height: 6rem;
  display: flex;
  z-index: ${(p) => p.index ?? '1100'};
`;

NavBar.propTypes = {
  bgColor: PropTypes.string,
  index: PropTypes.number,
};

export default NavBar;
