/* --------------------------------- IMPORT --------------------------------- */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import GridList from 'Components/container/GridList';
import { rgba, lighten } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a grid-menu section in SideDrawer
function SideDrawerItem({ children, title, as, to }) {
  return (
    <Container as={as} to={to}>
      <ItemHeader>{title}</ItemHeader>
      {children && (
        <SubMenu min="8rem" gap="1rem" maxWidth="100%" width="100%">
          {children}
        </SubMenu>
      )}
    </Container>
  );
}

/* --------------------------------- STYLING -------------------------------- */
const Container = styled.div`
  display: block;
  padding: 2rem 0;
  border-bottom: 1px solid ${(p) => rgba(p.theme.white, 0.3)};
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

/* -------------------------------- VALIDATE -------------------------------- */
SideDrawerItem.propTypes = {
  as: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.string,
  to: PropTypes.any,
};

export default SideDrawerItem;
