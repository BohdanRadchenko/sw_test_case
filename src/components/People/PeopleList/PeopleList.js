import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import { Loaders } from "../../Loaders";
import css from "../../list.module.css";

const SpeciesList = ({people, loading}) => {
  return (
    <div className={css.container}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!people.length && (
            <ul className={css.list}>
              {people.map((el, i) => (
                <li
                  className={css.item}
                  key={ i * 9}>
                  <NavLink
                    className={css.link}
                    to={`/people/${el.id}`}>{el.name}</NavLink>
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
  loading : peopleSelectors.getLoading(state)
})

export default connect(mSTP)(SpeciesList);