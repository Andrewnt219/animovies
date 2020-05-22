import styled from 'styled-components/macro';
import { darken } from 'polished';

const Input = styled.input`
  padding: 0.5rem 1rem;
  color: ${(p) => p.color ?? 'inherit'};
  width: ${(p) => p?.width};
  height: ${(p) => p?.height};
  border: none;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    color: ${(p) => (p.color ? darken(p.theme.white, 0.2) : 'inherit')};
  }
`;

export default Input;
