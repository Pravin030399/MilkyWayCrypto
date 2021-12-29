import React from 'react'

function SearchBar() {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text"></input>
        <div className="searchIcon"></div>
      </div>
      <div className="searchResults"></div>
    </div>
  )
}

export default SearchBar
