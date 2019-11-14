import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input type
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);
