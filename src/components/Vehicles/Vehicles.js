import React, { useEffect, useState } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as vehiclesSelectors from '../../redux/vehicles/vehiclesSelectors'
import * as vehiclesOperations from '../../redux/vehicles/vehiclesOperations'
import * as controllerActions from '../../redux/controller/controllerActions'
import Modal from "../Modal/Modal";

const Vehicles = ({fetchPaginationVehicles, vehicles, prev, next, modalOnOpen, history}) => {
  const [count, setCount] = useState(1)

  console.log('history', history)

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

  const handlerTest = el => {
    const id = el.url.split('/')[5]
    history.push(id)
  }

  return (
    <div>
      {vehicles && (
        <ul>
          {vehicles.map((el, i) =>
            <li key={i}  onClick={() => handlerTest(el)}>
                <p>{el.name}</p>
            </li>)}
        </ul>
      )}
      <PaginationBar {...{handleButtonClick, next, prev}}/>
    </div>
  )}

const mSTP = state => ({
  vehicles : vehiclesSelectors.paginationVehicles(state),
  prev : vehiclesSelectors.vehiclesPrev(state),
  next : vehiclesSelectors.vehiclesNext(state),
})

const mDTP = {
  fetchPaginationVehicles : vehiclesOperations.fetchPaginationVehicles,
  modalOnOpen : controllerActions.modalOnOpen,
}

export default withRouter(connect(mSTP, mDTP)(Vehicles));