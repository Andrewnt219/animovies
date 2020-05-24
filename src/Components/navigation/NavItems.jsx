/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a centered-container
const NavItems = styled.ul`
  justify-content: ${(p) => p.justify ?? 'center'};

  display: flex;
  align-self: center;
`;

/* -------------------------------- VALIDATE -------------------------------- */
NavItems.propTypes = {
  justify: PropTypes.string,
};

export default NavItems;
