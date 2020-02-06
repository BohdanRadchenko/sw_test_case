import React from 'react';

const PaginationBar = ({handleButtonClick, next, prev}) => {
  return (
    <div>
    <button onClick={e => handleButtonClick(e)} disabled={!prev} >
      prev
    </button>

    <button onClick={e => handleButtonClick(e)} disabled={!next} >
        next
    </button>

    </div>)
}

export default PaginationBar;