import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(p) => p.direction ?? 'row'};
  justify-content: ${(p) => p.justify ?? 'center'};
  align-items: ${(p) => p.alignItems ?? 'center'};
`;

Flex.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Flex;
