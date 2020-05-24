import PropTypes from 'prop-types';
import React from 'react';

import { IconWrapper } from './IconWrapper';
import { SearchBarInput } from './SearchBarInput';
import { StyledSearchIcon } from './StyledSearchIcon';
import { SearchContainer } from './SearchContainer';

// SearchBar have to have hight in order to set IconWrapper 100% height
function SearchBar({
  // fontSize sets input's font and width+height of searchIcon
  fontSize,
  // className to format the Container
  className,
  // set searchIcon's color
  iconColor,
  // All of these go to the icon wrapper
  iconWrapperHeight,
  iconBgColor,
  iconWrapperWidth,
}) {
  return (
    <SearchContainer className={className}>
      <SearchBarInput fontSize={fontSize} />

      <IconWrapper
        as="button"
        height={iconWrapperHeight}
        bgColor={iconBgColor}
        width={iconWrapperWidth}
      >
        <StyledSearchIcon color={iconColor} size={fontSize} />
      </IconWrapper>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  iconColor: PropTypes.string,
  iconWrapperHeight: PropTypes.string,
  iconBgColor: PropTypes.string,
  iconWrapperWidth: PropTypes.string,
};

export default SearchBar;
