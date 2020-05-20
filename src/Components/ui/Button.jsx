import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { darken } from 'polished';

const Button = styled.button`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  border: none;
  color: ${(p) => p.color ?? p.theme.white};
  font-size: ${(p) => p.fontSize ?? '1rem'};
  border-radius: 5px;

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

  transition: background 200ms ease;

  &:hover {
    background-color: ${(p) => darken(0.05, p.bgColor ?? p.theme.primary)};
  }
`;

Button.propTypes = {
  bgColor: PropTypes.string,
  outlined: PropTypes.bool,
  contained: PropTypes.bool,
};

export default Button;
