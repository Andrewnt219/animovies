import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const FlexSpace = styled.div`
  flex: ${(p) => p.flex ?? 1};

  @media (max-width: ${(p) => p.breakpoint}) {
    display: none;
  }
`;

FlexSpace.proptypes = {
  flex: PropTypes.number,
  breakpoint: PropTypes.string,
};

export default FlexSpace;
