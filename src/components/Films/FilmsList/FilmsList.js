import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as filmsSelectors from '../../../redux/films/filmsSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({film, loading}) => {
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!film.length && (
            <ul>
              {film.map((el, i) => (
                <li key={el.episode_id}>
                  <NavLink to={`/films/${el.episode_id}`}>{el.title}</NavLink>
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
  loading : filmsSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);