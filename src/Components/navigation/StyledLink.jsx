// NOTE filtering props passed to ReactRouter Link

import { Link as RRLink } from 'react-router-dom';
import React from 'react';
import styled, { css } from 'styled-components/macro';

function Link({ to, className, children }) {
  return (
    <RRLink to={to} className={className}>
      {children}
    </RRLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  ${(p) => css`
    color: ${p.color ?? p.theme.white};

    &:hover {
      color: ${p.color ?? p.theme.white};
    }
  `}
`;

export default StyledLink;
