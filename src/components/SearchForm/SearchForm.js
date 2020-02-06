import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as peopleOperations from '../../redux/people/peopleOperations'
import * as planetsOperations from '../../redux/planets/planetsOperations'
import * as speciesOperations from '../../redux/species/speciesOperations'
import * as starshipsOperations from '../../redux/starships/starshipsOperations'
import * as vehiclesOperations from '../../redux/vehicles/vehiclesOperations'

import css from './SearchForm.module.css'

const SearchForm = ({
                      component,
                      searchPeople,
                      searchPlanets,
                      searchSpecies,
                      searchStarships,
                      searchVehicles
                    }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = e => {
    setSearchValue(e.target.value)
    e.preventDefault()
    if (component === 'people') {
      searchPeople(searchValue)
    }
    if (component === 'planets') {
      searchPlanets(searchValue)
    }
    if (component === 'species') {
      searchSpecies(searchValue)
    }
    if (component === 'starships') {
      searchStarships(searchValue)
    }
    if (component === 'vehicles') {
      searchVehicles(searchValue)
    }
  }

  const handleSearchSubmit = e => {
    // e.preventDefault()
    // if (component === 'people') {
    //   searchPeople(searchValue)
    // }
    // if (component === 'planets') {
    //   searchPlanets(searchValue)
    // }
    // if (component === 'species') {
    //   searchSpecies(searchValue)
    // }
    // if (component === 'starships') {
    //   searchStarships(searchValue)
    // }
    // if (component === 'vehicles') {
    //   searchVehicles(searchValue)
    // }
  }

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={e => handleSearchSubmit(e)}>
        <input
          value={searchValue}
          placeholder = {`Search...`}
          className={css.input}
          type="text"
          onChange={(e) => handleSearchChange(e)}/>
          <button
            className={css.button}
            type='submit'
            onClick={e =>  handleSearchSubmit(e)}>
            search
          </button>
      </form>
    </div>
  )
}

const mDTP = {
  searchPeople : peopleOperations.searchPeople,
  searchPlanets : planetsOperations.searchPlanets,
  searchSpecies : speciesOperations.searchSpecies,
  searchStarships : starshipsOperations.searchStarships,
  searchVehicles : vehiclesOperations.searchVehicles,
}

export default connect(null, mDTP)(SearchForm)