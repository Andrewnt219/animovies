/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

import GridList from 'Components/container/GridList';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a pop-up grid-menu in AppBar
const AppBarSubMenu = styled(GridList).attrs({
  min: '10rem',
  gap: '3rem',
  padding: '3rem',
  maxWidth: '50vw',
})`
  top: ${(p) => p.offsetTop};

  position: absolute;
  left: 0;

  background-color: ${() => rgba('black', 0.8)};
`;

/* -------------------------------- VALIDATE -------------------------------- */
AppBarSubMenu.propTypes = {
  offsetTop: PropTypes.string,
};

export default AppBarSubMenu;
