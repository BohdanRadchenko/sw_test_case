import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as filmsSelectors from '../../../redux/films/filmsSelectors'
import { Loaders } from "../../Loaders";

import css from '../../list.module.css'

const SpeciesList = ({film, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!film.length && (
            <ul className={css.list}>
              {film.map((el, i) => (
                <li
                  className={css.item}
                  key={el.episode_id}>
                  <NavLink
                    className={css.link}
                    to={`/films/${el.episode_id}`}>{el.title}</NavLink>
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