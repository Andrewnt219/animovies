import React from 'react';
import styled from 'styled-components/macro';
import Flex from 'Components/container/Flex';
import { rgba } from 'polished';

const DotsContainer = styled(Flex)`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -0.5rem);
  box-sizing: border-box;
  overflow: auto;
  width: 100%;
`;

const Dot = styled.div`
  border-radius: 100%;
  content: '';
  padding: clamp(0.5rem, 2vw, 1rem);
  background: ${(p) =>
    p.active ? p.theme.secondary : rgba(p.theme.secondary, 0.5)};
  margin: clamp(0.1rem, 0.5vw, 0.5rem);
`;

function DotIndicator({ movies, activeIdx }) {
  return (
    <DotsContainer>
      {movies.map((movie, idx) => (
        <Dot key={movie.id} active={idx === activeIdx} />
      ))}
    </DotsContainer>
  );
}

export default DotIndicator;
