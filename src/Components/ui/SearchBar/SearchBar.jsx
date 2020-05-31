import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { IconWrapper } from './IconWrapper';
import { SearchBarInput } from './SearchBarInput';
import { StyledSearchIcon } from './StyledSearchIcon';
import { SearchContainer } from './SearchContainer';
import { useHistory } from 'react-router-dom';

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
  const inputRef = useRef();

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/tmdb/search?searchTerm=${inputRef.current.value}&page=1`);
  };

  return (
    <SearchContainer className={className} handleSubmit={handleSubmit}>
      <SearchBarInput ref={inputRef} fontSize={fontSize} />

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
