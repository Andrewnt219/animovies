/* --------------------------------- IMPORT --------------------------------- */
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { darken } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render a basic styled button
const Button = styled.button`
  text-align: center;
  color: ${(p) => p.color ?? p.theme.white};
  font-size: ${(p) => p.fontSize ?? '1rem'};

  ${(p) =>
    p.outlined &&
    css`
      border: 1px solid ${p.theme.primary};
    `};
  ${(p) =>
    p.contained &&
    css`
      background-color: ${p.bgColor ?? p.theme.primary};
    `};

  &:hover {
    background-color: ${(p) => darken(0.05, p.bgColor ?? p.theme.primary)};
  }

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  /* background: none; */
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
