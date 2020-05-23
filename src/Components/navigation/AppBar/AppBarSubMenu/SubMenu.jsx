import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import GridList from 'Components/container/GridList';

const AppBarSubMenu = styled(GridList).attrs({
  min: '10rem',
  gap: '3rem',
  padding: '3rem',
  maxWidth: '50vw',
})`
  position: absolute;
  left: 0;
  top: ${(p) => p.offsetTop};
`;

AppBarSubMenu.propTypes = {
  offsetTop: PropTypes.string,
};

export default AppBarSubMenu;
