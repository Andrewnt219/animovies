/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import { darken } from 'polished';

import StyledLink from 'Components/navigation/StyledLink';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders navigation links for Landing page
export default styled(StyledLink).attrs((p) => ({
  color: darken(0.1, p.theme.white),
}))`
  padding: 1rem;
  margin: 0 0.5rem;

  transition: color 200ms ease;

  &:hover,
  &.active {
    color: ${(p) => p.theme.white};
  }

  &.active {
    border: 1px solid ${(p) => p.theme.white};
  }
`;
