import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { IoMdColorPalette } from 'react-icons/io';
import movieTheme from 'Theme/movieTheme';
import blueTheme from 'Theme/blueTheme';

import Backdrop from './ui/Backdrop';

function ThemeSwitcher({ switchTheme }) {
  const [showThemePanel, setShowThemePanel] = useState(false);
  return (
    <React.Fragment>
      {showThemePanel && (
        <Backdrop>
          <ThemePanel>
            <Theme
              bgColor={movieTheme.primary}
              onClick={() => switchTheme(movieTheme)}
            />
            <Theme
              bgColor={blueTheme.primary}
              onClick={() => switchTheme(blueTheme)}
            />
            <Theme
              bgColor={blueTheme.primary}
              onClick={() => switchTheme(movieTheme)}
            />
            <Theme
              bgColor={blueTheme.primary}
              onClick={() => switchTheme(movieTheme)}
            />
          </ThemePanel>
        </Backdrop>
      )}
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

const ThemePanel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vmin;
`;

const Theme = styled.div`
  background-color: ${(p) => p.bgColor};
  width: 15vmin;
  height: 15vmin;
  cursor: pointer;
`;

export default ThemeSwitcher;
