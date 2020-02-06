import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import SearchForm from "../SearchForm/SearchForm";
import * as planetsOperations from '../../redux/planets/planetsOperations'
import * as planetsSelectors from '../../redux/planets/planetsSelectors'
import { Loaders } from "../Loaders";

import css from './Planets.module.css'

const Planets = ({fetchPaginationPlanets, planets, prev, next, history, planetsSearch}) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchPaginationPlanets(count)
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
      <SearchForm component={'planets'}/>

      {planetsSearch.length !== 0 && (
        <ul className={css.list}>
          {planetsSearch.map((el, i) =>
            <li key={i}
                onClick={() => handleMoreClick(el)}
                className={css.item}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}

      {planetsSearch.length === 0 && (
        <>
        {!planets && <Loaders/>}
      {planets && (
        <ul className={css.list}>
        {planets.map((el, i) =>
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
  planets : planetsSelectors.paginationPlanets(state),
  next : planetsSelectors.planetsNext(state),
  prev : planetsSelectors.planetsPrev(state),
  planetsSearch : planetsSelectors.planetsSeach(state)
})

const mDTP = {
  fetchPaginationPlanets : planetsOperations.fetchPaginationPlanets
}

export default withRouter(connect(mSTP, mDTP)(Planets));
