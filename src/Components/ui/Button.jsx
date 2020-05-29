/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render a basic styled button
const Button = styled.button`
  text-align: center;
  color: inherit;
  font-size: inherit;

  background: ${(p) =>
    p.contained ? p.bgColor ?? p.theme.primary : 'transparent'};
  border: 1px solid
    ${(p) => (p.outlined ? p.borderColor ?? p.theme.white : 'transparent')};

  &:hover {
    filter: brightness(0.9);
  }

  padding: 0.5rem 1rem;
  border-radius: 5px;

  cursor: pointer;
  transition: background 200ms ease;
`;

/* -------------------------------- VALIDATE -------------------------------- */
Button.propTypes = {
  bgColor: PropTypes.string,
  outlined: PropTypes.bool,
  contained: PropTypes.bool,
};

export default Button;
