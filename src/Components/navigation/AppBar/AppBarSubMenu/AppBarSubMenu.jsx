import React, { useState } from 'react';
import AppBarNavItem from '../AppBarNavItem';
import SubMenu from './SubMenu';

export default function AppBarSubMenu(props) {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <AppBarNavItem
      as="div"
      onMouseEnter={() => setSubMenuIsOpen(true)}
      onMouseLeave={() => setSubMenuIsOpen(false)}
    >
      <props.Icon />
      <span>{props.title}</span>
      {subMenuIsOpen && (
        <SubMenu offsetTop={props.offsetTop}>{props.children}</SubMenu>
      )}
    </AppBarNavItem>
  );
}
