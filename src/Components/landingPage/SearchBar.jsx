/* --------------------------------- IMPORT --------------------------------- */
import SearchBar from 'Components/ui/SearchBar/SearchBar';
import styled from 'styled-components/macro';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders a SearchBar for Landing page
export default styled(SearchBar).attrs((p) => ({
  iconBgColor: p.theme.primary,
  iconWrapperWidth: 'min(30%, 10rem)',
}))`
  width: 100%;
  height: clamp(4rem, 10vw, 5rem);
`;
