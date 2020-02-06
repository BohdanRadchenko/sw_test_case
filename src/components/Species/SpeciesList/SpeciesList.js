import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as speciesSelectors from '../../../redux/species/speciesSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({species, loading}) => {
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!species.length && (
            <ul>
              {species.map((el, i) => (
                <li key={ i * 9}>
                  <NavLink to={`/species/${el.id}`}>{el.name}</NavLink>
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
  loading : speciesSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);