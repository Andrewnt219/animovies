import styled, { css, useTheme } from 'styled-components/macro';
import React from 'react';
import { rgba, lighten } from 'polished';
import Button from 'Components/ui/Button';
import StyledLink from 'Components/navigation/StyledLink';
import { motion } from 'framer-motion';
import { animation } from 'Theme/variants';

function HoveredCollectionItem({ item, children }) {
  const theme = useTheme();

  return (
    <Container
      key={item.title}
      variants={animation.popup.fromBottom}
      initial="initial"
      animate="enter"
      exit="exit"
      transition="transition"
    >
      <Header>{item.title}</Header>
      <Info>{item.genre_ids.map((genre) => genre.name).join(', ')}</Info>
      <SubHeader>
        <SubInfo contained>Score: {item.vote_average}</SubInfo>
        <SubInfo>{new Date(item.release_date).getFullYear()}</SubInfo>
      </SubHeader>
      <Overview>{children.slice(0, 100) + '...'}</Overview>
      <StyledLink button to={`/movies/${item.id}`}>
        <ItemButton contained>Details</ItemButton>
      </StyledLink>
      <ItemButton contained bgColor={theme.secondary}>
        Favorite
      </ItemButton>
    </Container>
  );
}

export default HoveredCollectionItem;

// NOTE renders extra info about the item when ItemContainer is hovered
const Container = styled(motion.div)`
  display: grid;
  gap: 0.5rem;

  flex-direction: column;

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

const Header = styled.p`
  font-size: larger;
  font-weight: bold;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;

  margin-left: -1rem;
  width: calc(100% + 2rem);
  padding: 0.5rem;
  background: ${(p) => lighten(0.1, p.theme.black)};
`;

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

const Overview = styled.p`
  font-size: inherit;
`;

const ItemButton = styled(Button)`
  font-weight: bold;
  font-size: inherit;

  width: 100%;
`;

const Info = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
