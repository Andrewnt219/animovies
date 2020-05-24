import React, { useState } from 'react';
import AppBarNavItem from '../AppBarNavItem';
import SubMenu from './SubMenu';
import { AnimatePresence } from 'framer-motion';
import { animation } from 'Theme/variants';

export default function DropDownMenu(props) {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <AppBarNavItem
      as="div"
      onMouseEnter={() => setSubMenuIsOpen(true)}
      onMouseLeave={() => setSubMenuIsOpen(false)}
    >
      <props.Icon />
      <span>{props.title}</span>
      <AnimatePresence>
        {subMenuIsOpen && (
          <SubMenu
            initial="initial"
            animate="enter"
            exit="exit"
            transition="transition"
            variants={animation.popup.fromTop}
            offsetTop={props.offsetTop}
          >
            {props.children}
          </SubMenu>
        )}
      </AnimatePresence>
    </AppBarNavItem>
  );
}
