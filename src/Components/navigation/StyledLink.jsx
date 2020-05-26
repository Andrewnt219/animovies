// NOTE filtering props passed to ReactRouter Link

import { Link as RRLink } from 'react-router-dom';
import React from 'react';
import styled, { css } from 'styled-components/macro';

const Link = React.forwardRef(({ to, className, children }, ref) => {
  return (
    <RRLink to={to} className={className} ref={ref}>
      {children}
    </RRLink>
  );
});

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
  color: ${(p) => p.color ?? p.theme.white};

  &:hover {
    color: ${(p) => p.color ?? p.theme.white};
  }

  ${(p) =>
    p.button &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default StyledLink;
