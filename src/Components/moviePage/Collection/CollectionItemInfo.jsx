import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import React, { useContext } from 'react';
import { rgba, lighten } from 'polished';
import Button from 'Components/ui/Button';
import StyledLink from 'Components/navigation/StyledLink';
import { motion } from 'framer-motion';
import ItemContext from 'Context/ItemContext';

// NOTE renders extra info about the item
function CollectionItemInfo({
  //* item must have title'', genre_ids[{name}], vote_average'', release_date'DATE'
  item,
  children,
  //
  handleClick,
  //
  className,
  //
  ...animation
}) {
  //* contexts
  const itemType = useContext(ItemContext);

  return (
    <Container
      className={className}
      onClick={handleClick}
      isClickAble={Boolean(handleClick)}
      //
      {...animation}
    >
      <Header>{item.title || item.original_name}</Header>

      <Info>{item.genre_ids.map((genre) => genre.name).join(', ')}</Info>

      <SubHeader>
        <SubInfo contained>Score: {item.vote_average}</SubInfo>
        <SubInfo>
          {/* dealing with different object formats */}
          {new Date(item.release_date || item.first_air_date).getFullYear()}
        </SubInfo>
      </SubHeader>

      <Overview>{children}</Overview>

      <StyledLink button to={`/tmdb/${itemType}/${item.id}`}>
        <ItemButton contained>Details</ItemButton>
      </StyledLink>
      {/* 
      <ItemButton contained bgColor={darken(0.1, theme.secondary)}>
        Favorite
      </ItemButton> */}
    </Container>
  );
}

CollectionItemInfo.propTypes = {
  children: PropTypes.string,
  item: PropTypes.shape({
    genre_ids: PropTypes.array,
    id: PropTypes.any,
    release_date: PropTypes.any,
    title: PropTypes.any,
    vote_average: PropTypes.any,
  }),
};

export default CollectionItemInfo;

// NOTE renders extra info about the item when ItemContainer is hovered
const Container = styled(motion.div)`
  display: grid;
  gap: 0.5rem;

  flex-direction: column;
  cursor: ${(p) => (p.isClickAble ? 'pointer' : 'auto')};

  position: absolute;
  top: 0;
  left: 0;

  color: inherit;
  font-size: smaller;

  width: 100%;
  height: 100%;
  background: ${(p) => rgba(p.theme.black, 0.9)};
  border-radius: inherit;
  padding: min(3vw, 1.5rem) 1rem;
`;

// NOTE renders the movie's title
const Header = styled.p`
  font-size: larger;
  font-weight: bold;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

// NOTE renders a row-flexed  contained SubHeader
const SubHeader = styled.div`
  display: flex;
  align-items: center;

  margin-left: -1rem;
  width: calc(100% + 2rem);
  padding: 0.5rem 1rem;
  background: ${(p) => lighten(0.1, p.theme.black)};
`;

// NOTE renders info inside SubHeader
const SubInfo = styled.p`
  background: ${(p) => p.contained && p.theme.sub1};
  color: ${(p) => p.contained && p.theme.black};

  font-size: inherit;

  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

// NOTE renders an overview
const Overview = styled.p`
  font-size: inherit;
  grid-row: auto / span 3;
`;

// NOTE renders a max-width button
const ItemButton = styled(Button)`
  font-weight: bold;
  font-size: inherit;

  width: 100%;
  padding: 0.5rem 1rem;
`;

// NOTE renders any extra info
const Info = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-style: italic;
`;
