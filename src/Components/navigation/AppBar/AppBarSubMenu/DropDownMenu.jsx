/* --------------------------------- IMPORT --------------------------------- */
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import AppBarNavItem from '../AppBarNavItem';
import SubMenu from './SubMenu';
import { animation } from 'Theme/variants';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render a dropdownMenu when hovered
export default function DropDownMenu({ Icon, title, offsetTop, children }) {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <AppBarNavItem
      as="div"
      onMouseEnter={() => setSubMenuIsOpen(true)}
      onMouseLeave={() => setSubMenuIsOpen(false)}
    >
      <Icon />

      <span>{title}</span>

      <AnimatePresence>
        {subMenuIsOpen && (
          <SubMenu
            initial="initial"
            animate="enter"
            exit="exit"
            transition="transition"
            variants={animation.popup.fromTop}
            offsetTop={offsetTop}
          >
            {children}
          </SubMenu>
        )}
      </AnimatePresence>
    </AppBarNavItem>
  );
}
