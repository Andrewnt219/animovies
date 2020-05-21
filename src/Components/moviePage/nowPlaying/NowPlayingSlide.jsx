import React from 'react';
import styled from 'styled-components/macro';

const StyledSlide = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

function NowPlayingSlide({ position, width, src }) {
  return <StyledSlide src={src}></StyledSlide>;
}
export default NowPlayingSlide;
