/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import { darken } from 'polished';
import PropTypes from 'prop-types';

import Input from 'Components/ui/Input';

/* -------------------------------- COMPONENT ------------------------------- */
export const SearchBarInput = styled(Input).attrs({
  placeholder: 'Enter a title',
})`
  font-size: ${(p) => p.fontSize ?? '1rem'};
  color: ${(p) => p.color ?? p.theme.primary};

  ::placeholder {
    color: ${(p) => darken(0.2, p.color ?? p.theme.primary)};
  }

  height: 100%;
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
`;

/* -------------------------------- VALIDATE -------------------------------- */
SearchBarInput.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
