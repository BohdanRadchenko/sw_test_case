import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as planetsSelectors from '../../../redux/planets/planetsSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({planets, loading}) => {
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!planets.length && (
            <ul>
              {planets.map((el, i) => (
                <li key={ i * 9}>
                  <NavLink to={`/planets/${el.id}`}>{el.name}</NavLink>
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
  loading : planetsSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);