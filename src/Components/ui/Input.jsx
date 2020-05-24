/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import { darken } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render a basic styled input
const Input = styled.input`
  color: ${(p) => p.color ?? 'inherit'};
  width: ${(p) => p?.width};
  height: ${(p) => p?.height};

  ::placeholder {
    color: ${(p) => (p.color ? darken(p.theme.white, 0.2) : 'inherit')};
  }

  padding: 0.5rem 1rem;
  border: none;
  outline: none;
`;

export default Input;
