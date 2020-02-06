import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import * as starshipsSelectors from '../../redux/starships/starshipsSelectors'
import * as starshipsOperation from '../../redux/starships/starshipsOperations'

const Species = ({fetchPaginationStarships, starships, prev, next}) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchPaginationStarships(count)
  }, [count])

  const handleButtonClick = (e) => {
    if (e.target.innerText === 'next') {
      setCount(count + 1)
    }
    if (e.target.innerText === 'prev') {
      setCount(count - 1)
    }
  }

  return (
    <div>
      {starships && (
        <ul>
          {starships.map((el, i) =>
            <li key={i}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}
      <PaginationBar {...{handleButtonClick, next, prev}}/>
    </div>
  )}

const mSTP = state => ({
  starships : starshipsSelectors.paginationStarships(state),
  prev : starshipsSelectors.starshipsPrev(state),
  next : starshipsSelectors.starshipsNext(state),
})

const mDTP = {
  fetchPaginationStarships : starshipsOperation.fetchPaginationStarships
}

export default connect(mSTP, mDTP)(Species);
;