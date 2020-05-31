/* --------------------------------- IMPORT --------------------------------- */
import styled from 'styled-components/macro';
import React, { useState, useContext } from 'react';
import { rgba } from 'polished';
import { MdInfoOutline } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';

import CollectionItemInfo from '../Collection/CollectionItemInfo';
import SliderContext from 'Context/SliderContext';

/* -------------------------------- COMPONENT ------------------------------- */
function NowPlayingSlide({ item }) {
  const [showInfo, setShowInfo] = useState(false);
  const sliderControllers = useContext(SliderContext);

  const handleInfoClicked = () => {
    setShowInfo(true);
    sliderControllers.pauseSlideShow()();
  };

  const handlePopupClicked = () => {
    setShowInfo(false);
    sliderControllers.resumeSlideShow();
  };

  return (
    <StyledSlide src={item.backdrop_path}>
      {!showInfo && <InfoButton onClick={handleInfoClicked} />}

      <AnimatePresence>
        {showInfo && (
          <PopupContainer
            item={item}
            handleClick={handlePopupClicked}
            //
            initial={{ opacity: 0, y: '-50%', x: '-50%', scale: 0 }}
            animate={{ opacity: 1, y: '-50%', x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: '-50%', x: '-50%', scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {item.overview.slice(0, 200) + '...'}
          </PopupContainer>
        )}
      </AnimatePresence>
    </StyledSlide>
  );
}

export default NowPlayingSlide;

// NOTE renders one Slide for the Slider
const StyledSlide = styled.div`
  position: relative;

  color: ${(p) => p.theme.white};
  font-size: 1.5rem;

  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vmin;
`;

// NOTE restyled the Container for large item, added style on medium screen and up
const PopupContainer = styled(CollectionItemInfo)`
  top: 50%;
  left: 50%;
  font-size: min(4vw, 2rem);

  /* Framer already does this  */
  /* transform: translate(-50%, -50%); */

  /* Avoid setting padding because padding is set in the original Component  */
  & > *:last-child {
    margin-bottom: 5%;
  }
  & > *:first-child {
    margin-top: 10%;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    width: 50%;
    height: 50%;
    border-top: 2px solid ${(p) => p.theme.white};
    box-shadow: 0 2px 2px #000;

    font-size: inherit;

    & > *:last-child {
      margin-bottom: 0;
    }
    & > *:first-child {
      margin-top: 0;
    }
  }
`;

const InfoButton = styled(MdInfoOutline)`
  color: inherit;
  opacity: 0.5;
  cursor: pointer;

  height: 20vw;
  width: 20vw;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease;

  &:hover {
    opacity: 1;
    border-radius: 4px;
    background: ${(p) => rgba(p.theme.primary, 0.5)};
  }
`;
