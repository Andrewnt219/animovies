import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.color ?? p.theme.white};
  margin: 0 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;

  &:visited {
    color: ${(p) => p.color ?? p.theme.white};
  }
`;

StyledLink.propTypes = {
  color: PropTypes.string,
};

export default StyledLink;
