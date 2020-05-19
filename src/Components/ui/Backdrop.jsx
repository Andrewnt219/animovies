import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Backdrop = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${(p) => p.index ?? '1000'};
  background: rgba(0, 0, 0, 0.5);
`;

Backdrop.propTypes = {
  index: PropTypes.number,
};

export default Backdrop;
