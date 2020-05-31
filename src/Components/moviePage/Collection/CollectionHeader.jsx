/* --------------------------------- IMPORT --------------------------------- */
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { sentenceCase } from 'change-case';

// import StyledLink from 'Components/navigation/StyledLink';
import { darken } from 'polished';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a grid-container with SectionName, another sub-grid with subitems, and a view more button
function CollectionHeader({
  sectionName,
  subMenuNames,
  activeMenu,
  setActiveMenu,
}) {
  return (
    <CategoryContainer isGrid={Boolean(subMenuNames)}>
      <SectionName>{sectionName}</SectionName>

      {subMenuNames && (
        <>
          <ItemsContainer>
            {renderItems(subMenuNames, activeMenu, setActiveMenu)}
          </ItemsContainer>
        </>
      )}
    </CategoryContainer>
  );
}

function renderItems(subMenuNames, activeMenu, setActiveMenu) {
  return subMenuNames.map((name) => (
    <Item
      key={name}
      active={activeMenu === name}
      onClick={() => setActiveMenu(name)}
    >
      {sentenceCase(name)}
    </Item>
  ));
}

/* --------------------------------- STYLING -------------------------------- */
const CategoryContainer = styled.div`
  display: grid;
  grid-template-areas:
    'name button'
    'items items';
  row-gap: ${(p) => p.isGrid && '2rem'};

  color: ${(p) => p.theme.white};
  font-size: 1.25rem;

  margin: 0 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    grid-template-areas: 'name items button';
    grid-template-columns: max-content 1fr auto;
    column-gap: 2rem;
  }
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

    margin-right: 1rem;
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

const Item = styled.div`
  ${(p) => css`
    background: ${p.active && p.theme.primary};
  `}

  text-align: center;
  /* Color is after the inherited color CategoryContainer */
  color: ${(p) => (p.active ? p.theme.white : darken(0.3, p.theme.white))};
  text-decoration: none;
  font-size: inherit;

  padding: 1rem;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
    /* Color is after the inherited color from CategoryContainer*/
    color: ${(p) => p.theme.white};
  }
`;

// const Button = styled(StyledLink)`
//   grid-area: button;

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;

//   color: inherit;
//   text-decoration: none;
//   font-size: larger;

//   &::after {
//     content: '▶';
//     display: inline-block;
//     margin-left: 0.25rem;
//   }

//   &:hover {
//     filter: brightness(1.1);
//   }
// `;
export default CollectionHeader;
