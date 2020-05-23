import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { darken, lighten } from 'polished';
import StyledLink from 'Components/navigation/StyledLink';

const SubMenuItem = styled(StyledLink)`
  color: ${(p) => darken(0.2, p.theme.white)};
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 4px;
  height: min-content;
  justify-self: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: ${(p) => lighten(0.2, p.theme.white)};
  }
`;

export default SubMenuItem;
