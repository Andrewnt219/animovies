import React from 'react';
import styled, { css } from 'styled-components/macro';
import useHover from 'Hooks/useHover';
import CollectionItemInfo from './CollectionItemInfo';
import { AnimatePresence, motion } from 'framer-motion';
import { animation } from 'Theme/variants';

// NOTE renders a container, and controls hover state for popup info
function CollectionItem({ item }) {
  const [itemHoverRef, isItemHovered] = useHover();

  return (
    <ItemContainer
      ref={itemHoverRef}
      to={`/movies/${item.id}`}
      isHovered={isItemHovered}
      //
      variants={animation.popup.fromTop}
      initial="initial"
      animate="enter"
      transition="transition"
    >
      <ItemImg src={item.poster_path} alt="movie_poster" />

      <AnimatePresence>
        {isItemHovered && (
          <CollectionItemInfo
            item={item}
            //
            key={item.title}
            variants={animation.popup.fromBottom}
            initial="initial"
            animate="enter"
            exit="exit"
            transition="transition"
          >
            {item.overview.slice(0, 90) + '...'}
          </CollectionItemInfo>
        )}
      </AnimatePresence>

      {/* Why not tenary you might ask? I cannot get Framer to work with tenary */}
      <AnimatePresence>
        {!isItemHovered && (
          <ItemTitle
            variants={animation.popup.basic}
            initial="initial"
            animate="enter"
            exit="exit"
            transition="transition"
          >
            {item.title}
          </ItemTitle>
        )}
      </AnimatePresence>
    </ItemContainer>
  );
}

/* --------------------------------- STYLING -------------------------------- */
// NOTE renders a container with hovered backdrop
const ItemContainer = styled(motion.div)`
  ${(p) => css`
    color: ${p.theme.white};
    border-top: 2px solid
      ${(p) => (p.isHovered ? p.theme.primary : 'transparent')};
  `}

  position: relative;

  box-shadow: 0px 2px 5px #000;
  border-radius: 4px;
  max-height: 30rem;
  width: auto;
`;

// NOTE renders a full img for the item
const ItemImg = styled.img`
  max-height: 100%;
  width: 100%;

  border-radius: 4px;
`;

// NOTE renders a title at the bottom of the container, with a bit black background for readability
const ItemTitle = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;

  text-align: center;
  color: inherit;
  font-weight: bold;
  font-size: inherit;

  width: 100%;
  background: linear-gradient(to top, black 20%, transparent 100%);
  padding-bottom: 0.25rem;
`;

export default CollectionItem;
