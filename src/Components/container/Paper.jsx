import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const Paper = styled.div`
  width: ${(p) => p.width ?? '100%'};
  ${(p) =>
    p.outline &&
    css`
      border: 1px solid black;
    `}
    border-radius: ${(p) => !p.square && '4px'};
`;

Paper.propTypes = {
  width: PropTypes.number,
  outline: PropTypes.bool,
  square: PropTypes.bool,
};

export { Paper };
