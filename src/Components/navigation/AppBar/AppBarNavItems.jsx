import styled from 'styled-components/macro';
import NavItems from '../NavItems';
export const AppBarNavItems = styled(NavItems)`
  display: none;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: flex;
    height: 100%;
  }
`;
