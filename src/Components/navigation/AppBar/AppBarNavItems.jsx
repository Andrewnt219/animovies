/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import NavItems from '../NavItems';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE the container for links/menus in AppBar
export const AppBarNavItems = styled(NavItems)`
  display: none;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: flex;
    height: 100%;
  }
`;
