/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';

import Button from 'Components/ui/Button';
import StyledNavLink from 'Components/navigation/StyledNavLink.jsx';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a link for Landing page
const LandingButton = styled(Button).attrs((p) => ({
  contained: 'true',
  fontSize: p.fontSize,
  as: StyledNavLink,
}))`
  padding: 1rem 3rem;
  box-shadow: 0 2px 5px ${(p) => p.theme.dark};
`;

export default LandingButton;
