import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as vehiclesSelectors from '../../../redux/vehicles/vehiclesSelectors'
import { Loaders } from "../../Loaders";
import css from "../../list.module.css";

const SpeciesList = ({vehicles, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!vehicles.length && (
            <ul className={css.list}>
              {vehicles.map((el, i) => (
                <li
                  className={css.item}
                  key={ i * 9}>
                  <NavLink
                    className={css.link}
                    to={`/vehicles/${el.id}`}>{el.name}</NavLink>
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