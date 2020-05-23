import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export const FixedBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => p?.height};
  background: ${(p) => p.theme.secondary};
  z-index: ${(p) => p.theme.zIndex.med};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding-left: 0;
  }
`;

FixedBar.propTypes = {
  height: PropTypes.string,
};
