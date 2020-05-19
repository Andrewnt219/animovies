import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Paper } from 'Components/container/Paper';

const Fixed = styled(Paper)`
  position: fixed;
  background: ${(p) => p.bgColor ?? p.theme.primary};
  display: flex;
  z-index: ${(p) => p.index ?? '1100'};
  margin: ${(p) => p.margin ?? 0};
`;

Fixed.propTypes = {
  bgColor: PropTypes.string,
  index: PropTypes.number,
  margin: PropTypes.string,
};

export default Fixed;
