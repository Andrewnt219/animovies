import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.secondary};
  margin: 0 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;

  &:visited {
    color: ${(p) => p.theme.secondary};
  }

  &.active {
    background: ${(p) => p.theme.secondary};
    border-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
