import styled from 'styled-components/macro';
import Logo from 'Components/ui/Logo';

export default styled(Logo).attrs({ size: 'clamp(2rem, 7vw, 5rem)' })`
  && {
    margin-bottom: 1rem;
  }
`;
