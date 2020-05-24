/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render a div that consume all the flex-space
const FlexSpace = styled.div`
  flex: ${(p) => p.flex ?? 1};

  @media (max-width: ${(p) => p.breakpoint}) {
    display: none;
  }
`;

/* --------------------------------- STYLING -------------------------------- */
FlexSpace.proptypes = {
  flex: PropTypes.number,
  breakpoint: PropTypes.string,
};

export default FlexSpace;
