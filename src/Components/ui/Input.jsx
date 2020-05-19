import styled from 'styled-components';
import { darken } from 'polished';

const Input = styled.input`
  padding: 0.5rem 1rem;
  color: ${(p) => darken(p.theme.secondary, 0.2)};
  border: none;
  outline: none;
`;

export default Input;
