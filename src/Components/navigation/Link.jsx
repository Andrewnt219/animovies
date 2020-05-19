import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--secondary);
  margin: 0 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;

  &:visited {
    color: var(--secondary);
  }

  &:hover,
  &.active {
    background: var(--secondary);
    border-color: var(--secondary);
    color: var(--primary);
  }
`;

export default StyledLink;
