import React from 'react';
import { connect } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom'
import * as filmsSelectors from '../../../redux/films/filmsSelectors'
import * as planetsSelectors from '../../../redux/planets/planetsSelectors'
import * as starshipsSelectors
  from '../../../redux/starships/starshipsSelectors'
import * as vehiclesSelectors from '../../../redux/vehicles/vehiclesSelectors'
import * as speciesSelectors from '../../../redux/species/speciesSelectors'
import FilmsList from "../../Films/FilmsList/FilmsList";
import PlanetsList from "../../Planets/PlanetsList/PlanetsList";
import StarshipsList from "../../Starships/StarshipsList/StarshipsList";
import VehiclesList from "../../Vehicles/VehiclesList/VehiclesList";
import SpeciesList from '../../Species/SpeciesList/SpeciesList'

import css from '../../detail.module.css'

const DetailPeople = ({
                        name,
                        height,
                        mass,
                        hair_color,
                        skin_color,
                        eye_color,
                        birth_year,
                        gender,
                        allFilms,
                        allPlanets,
                        allStarships,
                        allVehicles,
                        allSpecies,
                        films,
                      }) => {

  const history = useHistory()

  const handlerBack = () => {
    history.goBack()
  }

  const arrId = films.map(el => Number(el.split('/')[5]))
  const film = allFilms.filter(el => {
    return arrId.includes(el.episode_id)
  })

  return (
     <div className={css.container}>
       <div className={css.desc}>
      <p className={css.p}>Name:</p>
      <p className={css.i}>{name}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>height:</p>
      <p className={css.i}>{height}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>hair color:</p>
      <p className={css.i}>{hair_color}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>mass:</p>
      <p className={css.i}>{mass}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>skin color:</p>
      <p className={css.i}>{skin_color}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>eye color:</p>
      <p className={css.i}>{eye_color}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>birth year:</p>
      <p className={css.i}>{birth_year}</p>
       </div>
       <div className={css.desc}>
      <p className={css.p}>gender:</p>
      <p className={css.i}>{gender}</p>
       </div>

    {/*FILMS*/}
    {!!allFilms.length && (
      <div>
        <h2 className={css.title}>films</h2>
        <FilmsList film={film}/>
      </div>
    )}

      {/*PLANETS*/}
      {!!allPlanets.length && (
        <div>
        <h2 className={css.title}>homeworld</h2>
        <PlanetsList planets={allPlanets}/>
        </div>
      )}

    {/*STARSHIPS*/}
    {!!allStarships.length && (
      <div>
        <h2 className={css.title}>starships</h2>
        <StarshipsList starships={allStarships}/>
      </div>
    )}

    {/*VEHICLES*/}
    {!!allVehicles.length && (
      <div>
        <h2 className={css.title}>vehicles</h2>
        <VehiclesList vehicles={allVehicles}/>
      </div>
    )}

    {/*SPECIES*/}
    {!!allSpecies.length && (
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

    </div>)
}

const mSTP = state => ({
  allFilms : filmsSelectors.getAllFilms(state),
  allPlanets: planetsSelectors.getPlanets(state),
  allStarships: starshipsSelectors.getStarships(state),
  allVehicles: vehiclesSelectors.getAllVehicles(state),
  allSpecies: speciesSelectors.getAllSpecies(state),
})

export default connect(mSTP)(DetailPeople)

