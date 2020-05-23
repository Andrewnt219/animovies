import { MdSearch } from 'react-icons/md';
import styled from 'styled-components/macro';

export default styled(MdSearch)`
  color: ${(p) => p.theme.white};
  width: ${(p) => p.width ?? 'min(12vw, 5rem)'};
  height: 100%;
  cursor: pointer;
`;
