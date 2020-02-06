import React from 'react';
import css from './PaginationBar.module.css'

const PaginationBar = ({handleButtonClick, next, prev}) => {
  return (
    <div className={css.container}>
      <div className={css.buttonWrapper}>
    <button className={css.button} onClick={e => handleButtonClick(e)} disabled={!prev} >
      prev
    </button>

    <button className={css.button} onClick={e => handleButtonClick(e)} disabled={!next} >
        next
    </button>
      </div>
    </div>)
}

export default PaginationBar;