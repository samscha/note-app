import React from 'react';

import '../../styles/css/index.css';

const SearchBar = props => {
	return (
		<div className="SearchBar">
			<input
				onChange={props.updateSearchQuery}
				type="text"
				placeholder="Search"
				onBlur={props.resetQuery}
			/>
		</div>
	);
};

export default SearchBar;
