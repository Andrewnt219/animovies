/* --------------------------------- IMPORT --------------------------------- */
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE blindly copy material-ui, don't know what to do with this
const Paper = styled.div`
  width: ${(p) => p.width ?? '100%'};
  ${(p) =>
    p.outline &&
    css`
      border: 1px solid black;
    `}
    border-radius: ${(p) => !p.square && '4px'};
`;

/* -------------------------------- VALIDATE -------------------------------- */
Paper.propTypes = {
  width: PropTypes.number,
  outline: PropTypes.bool,
  square: PropTypes.bool,
};

export { Paper };
