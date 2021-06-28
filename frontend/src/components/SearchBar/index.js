import React from 'react'
import {
	Search,
	SearchInput
} from './SearchBarElements'

const SearchBar = ({ ...rest }) => {
  return (
    <Search>
    <SearchInput placeholder="Search Articles" />
    </Search>
  );
};

export default SearchBar;