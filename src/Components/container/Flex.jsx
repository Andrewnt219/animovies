/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE manually typing these style is probably faster
const Flex = styled.div`
  display: flex;
  flex-direction: ${(p) => p.direction ?? 'row'};
  justify-content: ${(p) => p.justify ?? 'center'};
  align-items: ${(p) => p.alignItems ?? 'center'};
`;

/* -------------------------------- VALIDATE -------------------------------- */
Flex.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Flex;
