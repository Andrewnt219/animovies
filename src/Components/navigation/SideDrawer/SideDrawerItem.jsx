import React from 'react';
import styled from 'styled-components/macro';
import SubMenu from '../AppBar/AppBarSubMenu/SubMenu';

const Container = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.secondary};
`;

function SideDrawerItem() {
  return <Container></Container>;
}

export default SideDrawerItem;
