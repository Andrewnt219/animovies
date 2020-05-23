import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.color ?? p.theme.white};

  &:visited {
    color: ${(p) => p.color ?? p.theme.white};
  }
`;

StyledLink.propTypes = {
  color: PropTypes.string,
};

export default StyledLink;
