import { MdSearch } from 'react-icons/md';
import styled, { css } from 'styled-components/macro';
import { rgba, radialGradient } from 'polished';

// function SearchIcon({ setIsSearchOpen, isSearchOpen }) {
//   return <StyledMdSearch isSearchOpen={isSearchOpen} onClick={} />;
// }

// export default SearchIcon;

export default styled(MdSearch).attrs((p) => ({
  onClick: () => p.setIsSearchOpen((prev) => !prev),
}))`
  color: ${(p) => p.theme.white};
  width: ${(p) => p.width ?? 'min(12vw, 5rem)'};
  height: 100%;
  cursor: pointer;
`;
