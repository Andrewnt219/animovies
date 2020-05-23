import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

const Backdrop = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${(p) => p.index ?? p.theme.zIndex.high};
  background: ${(p) => rgba(p.theme.black, 0.8)};
  top: 0;
  left: 0;
`;

Backdrop.propTypes = {
  index: PropTypes.number,
};

export default Backdrop;
