import PropTypes from 'prop-types';
import React from 'react';
import Flex from 'Components/container/Flex';
import Input from 'Components/ui/Input';
import { MdSearch } from 'react-icons/md';
import styled, { withTheme } from 'styled-components/macro';
import { darken } from 'polished';

const HEIGHT = '5rem';

const StyledSearchIcon = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  scale: 3;
  position: relative;
`;

const LandingInput = styled(Input)`
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
  font-size: ${(p) => p.fontSize ?? '1rem'};
  color: ${(p) => p.theme.primary};

  ::placeholder {
    color: ${(p) => darken(0.2, p.theme.primary)};
  }
`;

const IconWrapper = styled(Flex).attrs({ type: 'submit' })`
  height: ${HEIGHT};
  width: min(30%, 10rem);
  min-width: 5rem;
  background: ${(p) => p.theme.primary};
  border-radius: 0 0.5rem 0.5rem 0;
  border: 0;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: ${(p) => darken(0.05, p.theme.primary)};
  }
`;

const Container = styled(Flex)`
  width: 100%;
`;

function SearchBar(props) {
  return (
    <Container as="form">
      <LandingInput
        placeholder="Enter a title"
        height={HEIGHT}
        fontSize={props.fontSize}
      />

      <IconWrapper as="button">
        <StyledSearchIcon />
      </IconWrapper>
    </Container>
  );
}

SearchBar.propTypes = {
  fontSize: PropTypes.string,
};

export default withTheme(SearchBar);
