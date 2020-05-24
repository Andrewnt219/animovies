/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders the HamburgerMenu
function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <Bun isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <div></div>
      <div></div>
      <div></div>
    </Bun>
  );
}

/* --------------------------------- STYLING -------------------------------- */
// NOTE the container of the burger
const Bun = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  transition: background 200ms ease;

  div {
    &:first-child {
      transform: ${(p) => (p.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${(p) => (p.isOpen ? '0' : '1')};
      transform: ${(p) => (p.isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${(p) => (p.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }

    content: '';
    width: 4.5rem;
    height: 0.5rem;
    margin: 0.5rem;
    border-radius: 4px;
    background: ${(p) => p.theme.white};
    transform-origin: 2px;
    transition: all 200ms linear;

    &:active {
      background-color: white;
    }
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: none;
  }
`;

/* -------------------------------- VALIDATE -------------------------------- */
HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default HamburgerMenu;
