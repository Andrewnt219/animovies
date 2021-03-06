/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import { darken, lighten } from 'polished';

import StyledLink from 'Components/navigation/StyledLink.jsx';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a grid-item for submenu
const SubMenuItem = styled(StyledLink)`
  width: 100%;
  height: min-content;
  padding: 1rem 1rem;
  border-radius: 4px;

  text-align: center;
  color: ${(p) => darken(0.2, p.theme.white)};

  justify-self: center;

  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: ${(p) => lighten(0.2, p.theme.white)};
  }
`;

export default SubMenuItem;
