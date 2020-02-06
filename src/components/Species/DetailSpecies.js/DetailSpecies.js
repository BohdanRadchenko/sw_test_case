import React from 'react';
import {connect} from 'react-redux'
import * as filmsSelectors from "../../../redux/films/filmsSelectors";
import * as planetsSelectors from "../../../redux/planets/planetsSelectors";
import * as starshipsSelectors
  from "../../../redux/starships/starshipsSelectors";
import * as vehiclesSelectors from "../../../redux/vehicles/vehiclesSelectors";
import * as speciesSelectors from "../../../redux/species/speciesSelectors";
import * as peopleSelectors from "../../../redux/people/peopleSelectors";
import { NavLink, useHistory } from "react-router-dom";
import PlanetsList from "../../Planets/PlanetsList/PlanetsList";
import PeopleList from "../../People/PeopleList/PeopleList";

import css from '../../detail.module.css'

const DetailSpecies = ({
                         allPeople,
                         allPlanets,
                         name,
                         classification,
                         designation,
                         average_height,
                         skin_colors,
                         hair_colors,
                         eye_colors,
                         average_lifespan,
                         language,
                         people,
                         films,
                       }) => {

  const history = useHistory()

  const handlerBack = () => {
    history.goBack()
  }


  return (
    <div className={css.container}>
      <div className={css.desc}>
    <p className={css.p}>Name:</p>
    <p className={css.i}>{name}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>classification:</p>
    <p className={css.i}>{classification}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>designation:</p>
    <p className={css.i}>{designation}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>average_height:</p>
    <p className={css.i}>{average_height}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>skin_colors:</p>
    <p className={css.i}>{skin_colors}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>hair_colors:</p>
    <p className={css.i}>{hair_colors}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>eye_colors:</p>
    <p className={css.i}>{eye_colors}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>average_lifespan:</p>
    <p className={css.i}>{average_lifespan}</p>
      </div>
      <div className={css.desc}>
    <p className={css.p}>language:</p>
    <p className={css.i}>{language}</p>
      </div>

      {/*PLANETS*/}
      {!!allPlanets.length && (
        <div>
          <h2 className={css.title}>homeworld</h2>
          <PlanetsList planets={allPlanets}/>
        </div>
      )}

      {/*PEOPLE*/}
      {!!allPeople.length && (
        <div>
          <h2 className={css.title}>people</h2>
          <PeopleList people={allPeople}/>
        </div>
      )}

      <button
        className={css.button}
        onClick={handlerBack}
      >
        Back
      </button>

    </div>)
}

const mSTP = state => ({
  allFilms : filmsSelectors.getAllFilms(state),
  allPlanets: planetsSelectors.getPlanets(state),
  allStarships: starshipsSelectors.getStarships(state),
  allVehicles: vehiclesSelectors.getAllVehicles(state),
  allSpecies: speciesSelectors.getAllSpecies(state),
  allPeople : peopleSelectors.getPeople(state),
})

export default connect(mSTP)(DetailSpecies);