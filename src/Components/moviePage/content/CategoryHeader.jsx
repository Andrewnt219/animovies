/* --------------------------------- IMPORT --------------------------------- */
import styled, { css } from 'styled-components/macro';
import React, { useState } from 'react';
import StyledLink from 'Components/navigation/StyledLink';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a grid-container with SectionName, another sub-grid with subitems, and a view more button
function CategoryHeader({ sectionName, links }) {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  return (
    <CategoryContainer>
      <SectionName>{sectionName}</SectionName>

      <Button to="/">View More</Button>

      <ItemsContainer>
        {renderItems(links, activeMenuIndex, setActiveMenuIndex)}
      </ItemsContainer>
    </CategoryContainer>
  );
}

function renderItems(links, activeMenuIndex, setActiveMenuIndex) {
  return links.map(({ name, to, ...config }, idx) => (
    <Item
      key={name}
      to={to}
      {...config}
      active={activeMenuIndex === idx}
      onClick={() => setActiveMenuIndex(idx)}
    >
      {name}
    </Item>
  ));
}

/* --------------------------------- STYLING -------------------------------- */
const CategoryContainer = styled.div`
  display: grid;
  grid-template-areas:
    'name button'
    'items items';
  row-gap: 1rem;

  color: ${(p) => p.theme.white};
  font-size: 1.25rem;

  margin: 0 1rem;
`;

const SectionName = styled.p`
  grid-area: name;
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: x-large;
  color: inherit;

  &::before {
    content: '';
    display: inline-block;

    margin-right: 0.25rem;
    width: 0.5rem;
    height: 100%;
    background-color: ${(p) => p.theme.primary};
  }
`;

const ItemsContainer = styled.div`
  grid-area: items;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
`;

const Item = styled(StyledLink)`
  ${(p) => css`
    background: ${p.active && p.theme.primary};
  `}

  text-align: center;
  color: inherit;
  text-decoration: none;
  font-size: inherit;

  padding: 1rem;
  border-radius: 4px;

  &:hover {
    filter: brightness(1.1);
  }
`;

const Button = styled(StyledLink)`
  grid-area: button;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: inherit;
  text-decoration: none;
  font-size: larger;

  &::after {
    content: '▶';
    display: inline-block;
    margin-left: 0.25rem;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;
export default CategoryHeader;
