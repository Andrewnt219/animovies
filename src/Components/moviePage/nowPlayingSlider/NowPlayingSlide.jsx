/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders one Slide for the Slider
export default styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vmin;
`;
