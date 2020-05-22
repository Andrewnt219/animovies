import { MdSearch } from 'react-icons/md';
import styled from 'styled-components/macro';

export default styled(MdSearch)`
  color: ${(p) => p.theme.white};
  width: min(10vw, 5rem);
  height: 100%;
`;
