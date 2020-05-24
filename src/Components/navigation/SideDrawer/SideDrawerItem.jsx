import React from 'react';
import styled from 'styled-components/macro';
import GridList from 'Components/container/GridList';
import { rgba, lighten } from 'polished';

const Container = styled.div`
  display: block;
  border-bottom: 1px solid ${(p) => rgba(p.theme.white, 0.3)};
  padding: 2rem 0;
`;

const ItemHeader = styled.h1`
  font-size: 2.5rem;
  color: ${(p) => lighten(0.1, p.theme.primary)};
  text-align: center;

  margin-bottom: 1rem;

  &:hover {
    filter: brightness(1.2);
  }
`;

const SubMenu = styled(GridList)`
  font-size: 1.25rem;
`;

function SideDrawerItem({ children, title, as, to }) {
  return (
    <Container as={as} to={to}>
      <ItemHeader>{title}</ItemHeader>
      {children && (
        <SubMenu min="8rem" maxWidth="100%" width="100%">
          {children}
        </SubMenu>
      )}
    </Container>
  );
}

export default SideDrawerItem;
