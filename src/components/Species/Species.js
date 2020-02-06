import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import * as speciesOperations from '../../redux/species/speciesOperations'
import * as speciesSelectors from '../../redux/species/speciesSelectors'
import { Loaders } from "../Loaders";

import css from './Species.module.css'

const Species = ({fetchPaginationSpecies, species, prev, next, history}) => {
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

  const handleMoreClick = el => {
    const id = el.url.split('/')[5]
    history.push(`${id}/`)
  }

  return (
    <div className={css.container}>
      {!species && <Loaders/>}
      {species && (
        <ul className={css.list}>
          {species.map((el, i) =>
            <li key={i}
                className={css.item}
                onClick={() => handleMoreClick(el)}>
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

export default withRouter(connect(mSTP, mDTP)(Species));
;