import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({people, loading}) => {
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!people.length && (
            <ul>
              {people.map((el, i) => (
                <li key={ i * 9}>
                  <NavLink to={`/people/${el.id}`}>{el.name}</NavLink>
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