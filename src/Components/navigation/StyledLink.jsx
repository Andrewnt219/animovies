/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a NavLink with removed decoration
const StyledLink = styled(NavLink)`
  color: ${(p) => p.color ?? p.theme.white};

  &:visited {
    color: ${(p) => p.color ?? p.theme.white};
  }

  text-decoration: none;
`;

/* -------------------------------- VALIDATE -------------------------------- */
StyledLink.propTypes = {
  color: PropTypes.string,
};

export default StyledLink;
