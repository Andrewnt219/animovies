/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import Logo from 'Components/ui/Logo';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a Logo for Landing page
export default styled(Logo).attrs({ size: 'clamp(2rem, 7vw, 5rem)' })`
  && {
    margin: 0 auto;
    padding: 0;
  }
`;
