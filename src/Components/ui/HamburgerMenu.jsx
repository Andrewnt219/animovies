import React from 'react';
import styled from 'styled-components/macro';

const Bun = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  &:active {
  }

  div {
    content: '';
    width: 4.5rem;
    height: 0.5rem;
    margin: 0.5rem;
    border-radius: 4px;
    background: ${(p) => p.theme.white};
    transform-origin: 2px;
    transition: all 200ms linear;

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
  }

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <Bun isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <div></div>
      <div></div>
      <div></div>
    </Bun>
  );
}

export default HamburgerMenu;
