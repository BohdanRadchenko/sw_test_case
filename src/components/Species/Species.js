import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import * as speciesOperations from '../../redux/species/speciesOperations'
import * as speciesSelectors from '../../redux/species/speciesSelectors'

const Species = ({fetchPaginationSpecies, species, prev, next}) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchPaginationSpecies(count)
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
      {species && (
        <ul>
          {species.map((el, i) =>
            <li key={i}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}
      <PaginationBar {...{handleButtonClick, next, prev}}/>
    </div>
  )}

const mSTP = state => ({
  species : speciesSelectors.paginationSpecies(state),
  prev : speciesSelectors.speciesPrev(state),
  next : speciesSelectors.speciesNext(state),
})

const mDTP = {
  fetchPaginationSpecies : speciesOperations.fetchPaginationSpecies
}

export default connect(mSTP, mDTP)(Species);
;