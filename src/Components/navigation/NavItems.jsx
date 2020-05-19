import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const NavItems = styled.ul`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: ${(p) => p.justify ?? 'center'};
`;

NavItems.propTypes = {
  justify: PropTypes.string,
};

export default NavItems;
