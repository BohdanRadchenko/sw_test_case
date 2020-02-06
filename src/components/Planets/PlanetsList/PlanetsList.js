import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as planetsSelectors from '../../../redux/planets/planetsSelectors'
import { Loaders } from "../../Loaders";
import css from "../../list.module.css";

const SpeciesList = ({planets, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!planets.length && (
            <ul className={css.list}>
              {planets.map((el, i) => (
                <li
                  className={css.item}
                  key={ i * 9}>
                  <NavLink
                    className={css.link}
                    to={`/planets/${el.id}`}>{el.name}</NavLink>
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