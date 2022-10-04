import React from 'react'
import "./Search.css"

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search">
            <input type="text"
                value={search}
                ref={searchInput}
                onChange={handleSearch}
                placeholder="🔍 Search the character"
            />
        </div>
    );
}

export default Search;