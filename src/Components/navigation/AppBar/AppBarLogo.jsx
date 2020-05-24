/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import Logo from 'Components/ui/Logo';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders Logo in AppBar
export const AppBarLogo = styled(Logo)`
  height: 100%;
  border-radius: 0;

  &,
  & > * {
    font-size: min(8vw, 3rem);
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    background: ${(p) => p.theme.primary};

    div {
      background: ${(p) => p.theme.white};
      color: ${(p) => p.theme.primary};
    }
  }
`;
