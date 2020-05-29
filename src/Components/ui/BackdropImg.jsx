import styled from 'styled-components/macro';
import { rgba } from 'polished';

export default styled.div`
  position: relative;

  background-image: url('${(p) => p.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: ${(p) => p.width};
  height: ${(p) => p.height};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  

    width: 100%;
    height: 100%;
    background: ${(p) => rgba(p.theme.black, p.rgbaValue ?? 0.9)};
  }

  & > * {
    position: absolute;
    z-index: 1;
  }
`;
