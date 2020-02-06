import React, { useEffect, useState, useHistory } from 'react';
import PaginationBar from "../PaginationBar/PaginationBar";
import {connect} from 'react-redux'
import * as vehiclesSelectors from '../../redux/vehicles/vehiclesSelectors'
import * as vehiclesOperations from '../../redux/vehicles/vehiclesOperations'
import * as controllerActions from '../../redux/controller/controllerActions'
import Modal from "../Modal/Modal";

const Species = ({fetchPaginationVehicles, vehicles, prev, next, modalOnOpen, history}) => {
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
    console.log(el.url.split('/')[5])
    modalOnOpen()
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

export default connect(mSTP, mDTP)(Species);