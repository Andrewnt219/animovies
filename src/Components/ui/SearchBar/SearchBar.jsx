import PropTypes from 'prop-types';
import React from 'react';
import { IconWrapper } from './IconWrapper';
import { SearchBarInput } from './SearchBarInput';
import { StyledSearchIcon } from './StyledSearchIcon';
import { SearchContainer } from './SearchContainer';

// SearchBar have to have hight in order to set IconWrapper 100% height
function SearchBar({
  fontSize,
  className,
  iconColor,
  iconWrapperHeight,
  iconBgColor,
  iconWrapperWidth,
}) {
  return (
    <SearchContainer className={className} as="form">
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
