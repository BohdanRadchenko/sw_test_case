import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import { Loaders } from "../Loaders";
import * as vehiclesSelectors from '../../redux/vehicles/vehiclesSelectors'
import * as vehiclesOperations from '../../redux/vehicles/vehiclesOperations'
import SearchForm from "../SearchForm/SearchForm";

import css from './Vehicles.module.css'

const Vehicles = ({fetchPaginationVehicles, vehicles, prev, next, history, vehiclesSearch}) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchPaginationVehicles(count)
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
      <SearchForm component={'vehicles'}/>

      {vehiclesSearch.length !== 0 && (
        <ul className={css.list}>
          {vehiclesSearch.map((el, i) =>
            <li key={i}
                onClick={() => handleMoreClick(el)}
                className={css.item}>
              <p>{el.name}</p>
            </li>)}
        </ul>
      )}

      {vehiclesSearch.length === 0 && (
        <>
          {!vehicles && <Loaders/>}
          {vehicles && (
            <ul className={css.list}>
              {vehicles.map((el, i) =>
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
  vehicles : vehiclesSelectors.paginationVehicles(state),
  prev : vehiclesSelectors.vehiclesPrev(state),
  next : vehiclesSelectors.vehiclesNext(state),
  vehiclesSearch : vehiclesSelectors.vehiclesSearch(state)

})

const mDTP = {
  fetchPaginationVehicles : vehiclesOperations.fetchPaginationVehicles,
}

export default withRouter(connect(mSTP, mDTP)(Vehicles));