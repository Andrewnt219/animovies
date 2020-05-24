/* --------------------------------- IMPORT --------------------------------- */
import Flex from 'Components/container/Flex';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { darken } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
export const IconWrapper = styled(Flex).attrs({ type: 'submit' })`
  height: ${(p) => p.height ?? '100%'};
  width: ${(p) => p.width ?? '100%'};
  background: ${(p) => p?.bgColor};

  &:hover {
    background: ${(p) => p.bgColor && darken(0.05, p.bgColor)};
  }

  border-radius: 0 0.5rem 0.5rem 0;
  border: 0;
  cursor: pointer;
  transition: background 200ms ease;
`;

/* -------------------------------- VALIDATE -------------------------------- */
IconWrapper.propTypes = {
  height: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};
