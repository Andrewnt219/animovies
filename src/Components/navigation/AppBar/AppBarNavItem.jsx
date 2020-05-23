import styled from 'styled-components/macro';
import StyledLink from '../StyledLink';
import { lighten } from 'polished';

export default styled(StyledLink).attrs((p) => ({
  color: lighten(0.4, p.theme.dark),
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  transition: color 150ms ease;
  padding: 1rem 0 0 0;
  font-size: 1.5rem;
  margin: 0 2rem;
  position: relative;

  &:hover svg,
  &:hover span {
    color: ${(p) => p.theme.white};
  }

  svg {
    scale: 2;
  }

  span {
    margin-top: 30%;
  }
`;
