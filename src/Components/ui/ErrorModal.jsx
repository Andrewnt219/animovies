import styled from 'styled-components/macro';
import React from 'react';
import Backdrop from './Backdrop';

function ErrorModal({ children, handleClick }) {
  return (
    <React.Fragment>
      <Backdrop index="low" handleClick={handleClick} />
      <Modal>
        <Header>ERROR</Header>
        {children}
        <SubHeader>(Click anywhere to dismiss)</SubHeader>
      </Modal>
    </React.Fragment>
  );
}

const Header = styled.h1`
  font-size: larger;
  background: ${(p) => p.theme.error};
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.white};
  padding: 0.75rem;
  border-radius: 4px 4px 0 0;

  width: calc(100% + 2rem);
`;

const SubHeader = styled.p`
  font-size: smaller;
  font-style: italic;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${(p) => p.theme.zIndex.med};
  transform: translate(-50%, -50%);

  font-size: 1.25rem;
  color: ${(p) => p.theme.dark};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 90vmin;
  height: 10rem;
  border-radius: 4px;
  background: ${(p) => p.theme.white};
  padding: 0 1rem 1rem 1rem;
`;
export default ErrorModal;
