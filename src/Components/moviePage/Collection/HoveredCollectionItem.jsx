import PropTypes from 'prop-types';
import styled, { css, useTheme } from 'styled-components/macro';
import React from 'react';
import { rgba, lighten, darken } from 'polished';
import Button from 'Components/ui/Button';
import StyledLink from 'Components/navigation/StyledLink';
import { motion } from 'framer-motion';

// NOTE renders extra info about the hovered item
function HoveredCollectionItem({
  item,
  children,
  className,
  handleClick,
  ...animation
}) {
  const theme = useTheme();

  return (
    <Container
      className={className}
      onClick={handleClick}
      //
      {...animation}
    >
      <Header>{item.title}</Header>

      <Info>{item.genre_ids.map((genre) => genre.name).join(', ')}</Info>

      <SubHeader>
        <SubInfo contained>Score: {item.vote_average}</SubInfo>
        <SubInfo>{new Date(item.release_date).getFullYear()}</SubInfo>
      </SubHeader>

      <Overview>{children}</Overview>

      <StyledLink button to={`/movies/${item.id}`}>
        <ItemButton contained>Details</ItemButton>
      </StyledLink>

      <ItemButton contained bgColor={darken(0.1, theme.secondary)}>
        Favorite
      </ItemButton>
    </Container>
  );
}

HoveredCollectionItem.propTypes = {
  children: PropTypes.string,
  item: PropTypes.shape({
    genre_ids: PropTypes.array,
    id: PropTypes.any,
    release_date: PropTypes.any,
    title: PropTypes.any,
    vote_average: PropTypes.any,
  }),
};

export default HoveredCollectionItem;

// NOTE renders extra info about the item when ItemContainer is hovered
const Container = styled(motion.div)`
  display: grid;
  gap: 0.5rem;

  flex-direction: column;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 0;

  color: inherit;
  font-size: smaller;

  width: 100%;
  height: 100%;
  background: ${(p) => rgba(p.theme.black, 0.9)};
  border-radius: inherit;
  padding: 1rem;
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
  padding: 0.5rem;
  background: ${(p) => lighten(0.1, p.theme.black)};
`;

// NOTE renders info inside SubHeader
const SubInfo = styled.p`
  ${(p) =>
    p.contained &&
    css`
      background: ${p.theme.sub1};
      color: ${p.theme.black};
    `}

  font-size: inherit;

  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

// NOTE renders an overview
const Overview = styled.p`
  font-size: inherit;
`;

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
`;
