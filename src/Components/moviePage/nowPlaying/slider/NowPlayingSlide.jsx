import React from 'react';
import styled from 'styled-components/macro';

const StyledSlide = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 30vh;
`;

function NowPlayingSlide({ src }) {
  return <StyledSlide src={src}></StyledSlide>;
}
export default NowPlayingSlide;
