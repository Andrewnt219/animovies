import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { IoMdColorPalette } from 'react-icons/io';
import movieTheme from 'Theme/movieTheme';
import blueTheme from 'Theme/blueTheme';
import greenTheme from 'Theme/greenTheme';
import yellowTheme from 'Theme/yellowTheme';

import Backdrop from './ui/Backdrop';
import { AnimatePresence, motion } from 'framer-motion';
import { animation } from 'Theme/variants';

function ThemeSwitcher({ switchTheme }) {
  const [showThemePanel, setShowThemePanel] = useState(false);

  const handleClick = (theme) => {
    switchTheme(theme);
    window.localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {showThemePanel && (
          <React.Fragment>
            <Backdrop
              index="med"
              handleClick={() => setShowThemePanel(false)}
            ></Backdrop>
            <ThemePanel
              variants={animation.stagger.container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Theme
                variants={animation.stagger.child}
                bgColor={movieTheme.primary}
                onClick={() => handleClick(movieTheme)}
              />
              <Theme
                variants={animation.stagger.child}
                bgColor={greenTheme.primary}
                onClick={() => handleClick(greenTheme)}
              />
              <Theme
                variants={animation.stagger.child}
                bgColor={blueTheme.primary}
                onClick={() => handleClick(blueTheme)}
              />
              <Theme
                variants={animation.stagger.child}
                bgColor={yellowTheme.primary}
                onClick={() => handleClick(yellowTheme)}
              />
            </ThemePanel>
          </React.Fragment>
        )}
      </AnimatePresence>
      <SwitchButton onClick={() => setShowThemePanel((prev) => !prev)}>
        <IoMdColorPalette />
      </SwitchButton>
    </React.Fragment>
  );
}

const SwitchButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: ${(p) => p.theme.zIndex.high};

  width: 5rem;
  height: 5rem;
  background-color: ${(p) => p.theme.primary};
  border-radius: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: ${(p) => p.theme.white};
    width: 3rem;
    height: 3rem;
  }
`;

const ThemePanel = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${(p) => p.theme.zIndex.high};

  transform: translate(-50%, -50%);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vmin;
`;

const Theme = styled(motion.div)`
  background-color: ${(p) => p.bgColor};
  width: 15vmin;
  height: 15vmin;
  cursor: pointer;
`;

export default ThemeSwitcher;
