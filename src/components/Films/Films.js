import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as filmsSelectors from '../../redux/films/filmsSelectors'
import { filterByName } from "../../helpers/filterByName";
import SearchBar from "../SearchBar/SearchBar";
import DrewFilmsCard from "./DrewFilmsCard/DrewFilmsCard";
import { Loaders } from "../Loaders";

import css from './Films.module.css'

const Films = ({allFilms, loading}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (value) => {
    setSearchValue(value)
  }

  const filter = filterByName(allFilms, searchValue)

  return  (
    <div>
      <SearchBar handleSearchChange={handleSearchChange}/>
      {loading && <Loaders/>}
      {!!allFilms.length && (
        <ul className={css.filmsList}>
          {!!filter.length && (
            filter.map(el => (
              <li key={el.episode_id} className={css.filmsItem}>
                <DrewFilmsCard {...el}/>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
};

const mSTP = state => ({
  allFilms : filmsSelectors.getAllFilms(state),
  loading : filmsSelectors.getLoading(state)
})

export default connect(mSTP)(Films)