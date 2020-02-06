import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import * as filmsSelectors from '../../../redux/films/filmsSelectors'
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import * as planetsSelectors from '../../../redux/planets/planetsSelectors'
import * as starshipsSelectors from '../../../redux/starships/starshipsSelectors'
import * as speciesSelectors from '../../../redux/species/speciesSelectors'
import * as vehiclesSelectors from '../../../redux/vehicles/vehiclesSelectors'
import { Loaders } from "../../Loaders";
import SpeciesList from "../../Species/SpeciesList/SpeciesList";
import VehiclesList from "../../Vehicles/VehiclesList/VehiclesList";
import StarshipsList from "../../Starships/StarshipsList/StarshipsList";
import PlanetsList from "../../Planets/PlanetsList/PlanetsList";
import PeopleList from "../../People/PeopleList/PeopleList";

import css from '../../detail.module.css'

const DetailFilms = ({
  people,
  allPlanets,
  allStarships,
  allVehicles,
  allSpecies,
  title,
  opening_crawl,
  director,
  producer,
  release_date,
  characters,
  planets,
  starships,
  vehicles,
  species,
  loading
}) => {

  const history = useHistory()

  const handlerBack = () => {
    history.goBack()
  }

  if(loading) {
    return <Loaders/>
  }

  return (
    <div className={css.container}>
      <div className={css.desc}>
        <p  className={css.p}>Title:</p>
        <p  className={css.i}>{title}</p>
      </div>
      <div className={css.desc}>
        <p  className={css.p}>Decription:</p>
        <p  className={css.i}>{opening_crawl}</p>
      </div>
      <div className={css.desc}>
        <p  className={css.p}>Director:</p>
        <p  className={css.i}>{director}</p>
      </div>
      <div className={css.desc}>
        <p  className={css.p}>Producer:</p>
        <p  className={css.i}>{producer}</p>
      </div>
      <div className={css.desc}>
        <p  className={css.p}>Release Date:</p>
        <p  className={css.i}>{release_date}</p>
      </div>

      {/*CHARACTERS*/}
      {!!characters.length && (
        <div>
          <h2 className={css.title}>characters</h2>
          <PeopleList people={people}/>
        </div>
      )}

      {/*PLANETS*/}
      {!!planets.length && (
        <div>
          <h2 className={css.title}>planets</h2>
          <PlanetsList planets={allPlanets}/>
        </div>
      )}

      {/*STARSHIPS*/}
      {!!starships.length && (
        <div>
          <h2 className={css.title}>starships</h2>
          <StarshipsList starships={allStarships}/>
        </div>
      )}

      {/*VEHICLES*/}
      {!!vehicles.length && (
        <div>
          <h2 className={css.title}>vehicles</h2>
          <VehiclesList vehicles={allVehicles}/>
        </div>
      )}

      {/*SPECIES*/}
      {!!species.length && (
        <div>
          <h2 className={css.title}>species</h2>
          <SpeciesList species={allSpecies}/>
        </div>
      )}

      <button
        className={css.button}
        onClick={handlerBack}
      >
        Back
      </button>
    </div>
  )
}

const mSTP = state => ({
  loading : filmsSelectors.getLoading(state),
  people : peopleSelectors.getPeople(state),
  allPlanets : planetsSelectors.getPlanets(state),
  allStarships : starshipsSelectors.getStarships(state),
  allVehicles : vehiclesSelectors.getAllVehicles(state),
  allSpecies : speciesSelectors.getAllSpecies(state),
})

export default connect(mSTP)(DetailFilms)