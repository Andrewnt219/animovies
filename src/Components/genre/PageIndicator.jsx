import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import styled, { css } from 'styled-components/macro';
import Button from 'Components/ui/Button';
import { rgba } from 'polished';

export default function PageIndicator({
  numberOfPages,
  handleChange,
  currentPageNumber,
}) {
  const { items } = usePagination({
    count: numberOfPages,
    onChange: handleChange,
    hideNextButton: true,
    hidePrevButton: true,
  });

  return (
    <Container>
      {items.map(({ page, type, ...item }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = '…';
        } else {
          children = (
            <PageNumber
              key={page}
              isActive={Number(currentPageNumber) === page}
              {...item}
            >
              {page}
            </PageNumber>
          );
        }

        return children;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;

const PageNumber = styled(Button)`
  ${(p) =>
    p.isActive &&
    css`
      background: ${(p) => p.theme.primary};
      font-weight: bold;
    `}

  margin: 0 1.5vw;

  &:hover {
    background: ${(p) => rgba(p.theme.primary, 0.5)};
  }
`;
