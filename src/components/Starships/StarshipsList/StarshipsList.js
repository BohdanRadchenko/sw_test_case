import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import * as starshipsSelectors from '../../../redux/starships/starshipsSelectors'
import { Loaders } from "../../Loaders";

const style = {
  position: 'relative',
  display : 'block'
}

const SpeciesList = ({starships, loading}) => {
  console.log(starships)
  return (
    <div style={style}>
      {loading && <Loaders/>}
      {!loading && (
        <>
          {!!starships.length && (
            <ul>
              {starships.map((el, i) => (
                <li key={ i * 9}>
                  <NavLink to={`/starships/${el.id}`}>{el.name}</NavLink>
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