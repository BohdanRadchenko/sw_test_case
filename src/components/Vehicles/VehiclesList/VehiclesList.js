import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as vehiclesSelectors from '../../../redux/vehicles/vehiclesSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({vehicles, loading}) => {
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!vehicles.length && (
            <ul>
              {vehicles.map((el, i) => (
                <li key={ i * 9}>
                  <NavLink to={`/vehicles/${el.id}`}>{el.name}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

const mSTP = state => ({
  loading : vehiclesSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);