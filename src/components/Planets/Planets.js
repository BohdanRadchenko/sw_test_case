import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import * as planetsOperations from '../../redux/planets/planetsOperations'
import * as planetsSelectors from '../../redux/planets/planetsSelectors'

const Planets = ({fetchPaginationPlanets, planets, prev, next}) => {
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

  return (
    <div>
      {planets && (
        <ul>
          {planets.map((el, i) =>
            <li key={i}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}
      <PaginationBar {...{handleButtonClick, next, prev}}/>
    </div>
  )}

const mSTP = state => ({
  planets : planetsSelectors.paginationPlanets(state),
  next : planetsSelectors.planetsNext(state),
  prev : planetsSelectors.planetsPrev(state),
})

const mDTP = {
  fetchPaginationPlanets : planetsOperations.fetchPaginationPlanets
}

export default connect(mSTP, mDTP)(Planets);
