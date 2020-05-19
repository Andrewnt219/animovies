import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import React from 'react';

import { Paper } from 'Components/container/Paper';
import NavItems from './NavItems';
import StyledLink from './Link';

const StyledNavBar = styled(Paper)`
  position: fixed;
  background: ${(p) => p.bgColor ?? 'var(--primary)'};
  height: 6rem;
  display: flex;
  z-index: ${(p) => p.index ?? '1100'};
`;

function NavBar(props) {
  return (
    <StyledNavBar {...props}>
      <NavItems>
        <StyledLink to="/" exact>
          Movies
        </StyledLink>
        <StyledLink to="/anime">Anime</StyledLink>
      </NavItems>
    </StyledNavBar>
  );
}

NavBar.propTypes = {
  bgColor: PropTypes.string,
  index: PropTypes.number,
};

export default NavBar;
