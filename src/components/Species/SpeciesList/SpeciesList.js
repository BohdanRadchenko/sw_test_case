import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as speciesSelectors from '../../../redux/species/speciesSelectors'
import { Loaders } from "../../Loaders";
import css from "../../list.module.css";

const SpeciesList = ({species, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!species.length && (
            <ul className={css.list}>
              {species.map((el, i) => (
                <li
                  className={css.item}
                  key={ i * 9}>
                  <NavLink
                    className={css.link}
                    to={`/species/${el.id}`}>{el.name}</NavLink>
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