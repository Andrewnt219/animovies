import React from 'react';
import NavBar from 'Components/navigation/NavBar';
import styled from 'styled-components/macro';
import Backdrop from 'Components/ui/Backdrop';
import bg from 'Assets/bg.jpg';

const StyledLanding = styled.div`
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80)
    center 4rem no-repeat;

  @media screen and (min-width: 900px) {
    background: url(${bg}) center no-repeat;
  }
`;

function Landing() {
  return (
    <StyledLanding>
      <Backdrop />
      <NavBar />
    </StyledLanding>
  );
}

export default Landing;
