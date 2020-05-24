/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
export const FixedBar = styled.div`
  height: ${(p) => p?.height};

  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndex.med};

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background: ${(p) => p.theme.secondary};
  padding: 0 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding-left: 0;
  }
`;

/* -------------------------------- VALIDATE -------------------------------- */
FixedBar.propTypes = {
  height: PropTypes.string,
};
