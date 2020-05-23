import Input from 'Components/ui/Input';
import styled from 'styled-components/macro';
import { darken } from 'polished';
import PropTypes from 'prop-types';

export const SearchBarInput = styled(Input).attrs({
  placeholder: 'Enter a title',
})`
  height: 100%;
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
  font-size: ${(p) => p.fontSize ?? '1rem'};
  color: ${(p) => p.color ?? p.theme.primary};

  ::placeholder {
    color: ${(p) => darken(0.2, p.color ?? p.theme.primary)};
  }
`;

SearchBarInput.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
