import React from 'react'

const SearchBar = ({handleSearchChange}) => {
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => handleSearchChange(e.target.value)}/>
      </form>
    </div>
  )
}

export default SearchBar