/* --------------------------------- IMPORT --------------------------------- */
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
export const StyledSearchIcon = styled(MdSearch)`
  color: ${(p) => p.color ?? p.theme.white};
  width: ${(p) => p.size};
  height: ${(p) => p.size};

  position: relative;
  scale: 1.5;
`;

/* -------------------------------- VALIDATE -------------------------------- */
StyledSearchIcon.propTypes = {
  iconColor: PropTypes.string,
  size: PropTypes.string,
};
