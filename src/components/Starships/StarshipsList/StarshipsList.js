import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as starshipsSelectors from '../../../redux/starships/starshipsSelectors'
import { Loaders } from "../../Loaders";

import css from "../../list.module.css";

const SpeciesList = ({starships, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!starships.length && (
            <ul className={css.list}>
              {starships.map((el, i) => (
                <li
                  className={css.item}
                  key={ i * 9}>
                  <NavLink
                    className={css.link}
                    to={`/starships/${el.id}`}>{el.name}</NavLink>
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
  loading : starshipsSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);