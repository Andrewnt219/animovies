import styled from 'styled-components/macro';
import Logo from 'Components/ui/Logo';
export const AppBarLogo = styled(Logo)`
  border-radius: 0;
  height: 100%;

  &,
  & > * {
    font-size: min(8vw, 3rem);
  }

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    background: ${(p) => p.theme.primary};

    div {
      background: ${(p) => p.theme.white};
      color: ${(p) => p.theme.primary};
    }
  }
`;
