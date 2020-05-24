/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Paper } from 'Components/container/Paper';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE this inheritance is going to make debugging hell
const Fixed = styled(Paper)`
  background: ${(p) => p.bgColor ?? p.theme.primary};
  z-index: ${(p) => p.index ?? '1100'};

  position: fixed;

  display: flex;
  margin: ${(p) => p.margin ?? 0};
`;

/* -------------------------------- VALIDATE -------------------------------- */
Fixed.propTypes = {
  bgColor: PropTypes.string,
  index: PropTypes.number,
  margin: PropTypes.string,
};

export default Fixed;
