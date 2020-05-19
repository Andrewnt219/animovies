import StyledLink from 'Components/navigation/Link';
import styled from 'styled-components';
import { darken } from 'polished';

export default styled(StyledLink).attrs((p) => ({
  color: darken(0.1, p.theme.secondary),
}))`
  padding: 1rem;
  margin: 0 0.5rem;
  transition: color 200ms ease;

  &:hover,
  &.active {
    color: ${(p) => p.theme.secondary};
  }

  &.active {
    border: 1px solid ${(p) => p.theme.secondary};
  }
`;
