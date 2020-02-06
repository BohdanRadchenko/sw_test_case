import React from 'react'
import css from './SearchBar.module.css'

const SearchBar = ({handleSearchChange}) => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <input
          placeholder = {`Search...`}
          className={css.input}
          type="text"
          onChange={(e) => handleSearchChange(e.target.value)}/>
      </form>
    </div>
  )
}

export default SearchBar