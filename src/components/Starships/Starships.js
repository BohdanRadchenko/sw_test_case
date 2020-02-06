import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Loaders } from "../Loaders";
import * as starshipsSelectors from '../../redux/starships/starshipsSelectors'
import * as starshipsOperation from '../../redux/starships/starshipsOperations'

import css from './Starships.module.css'
import SearchForm from "../SearchForm/SearchForm";
import * as planetsSelectors from "../../redux/planets/planetsSelectors";

const Species = ({fetchPaginationStarships, starships, prev, next, history, starshipsSearch}) => {
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

  const handleMoreClick = el => {
    const id = el.url.split('/')[5]
    history.push(`${id}/`)
  }

  return (
    <div className={css.container}>
      <SearchForm component={'starships'}/>

      {starshipsSearch.length !== 0 && (
        <ul className={css.list}>
          {starshipsSearch.map((el, i) =>
            <li key={i}
                onClick={() => handleMoreClick(el)}
                className={css.item}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}

      {starshipsSearch.length === 0 && (
        <>
          {!starships && <Loaders/>}
          {starships && (
            <ul className={css.list}>
              {starships.map((el, i) =>
                <li key={i}
                    className={css.item}
                    onClick={() => handleMoreClick(el)}>
                  <p>{el.name}</p>
                </li>)}
            </ul>
          )}
        </>
      )}
      <PaginationBar {...{handleButtonClick, next, prev}}/>
    </div>
  )}

const mSTP = state => ({
  starships : starshipsSelectors.paginationStarships(state),
  prev : starshipsSelectors.starshipsPrev(state),
  next : starshipsSelectors.starshipsNext(state),
  starshipsSearch : starshipsSelectors.starshipsSearch(state)

})

const mDTP = {
  fetchPaginationStarships : starshipsOperation.fetchPaginationStarships
}

export default withRouter(connect(mSTP, mDTP)(Species));