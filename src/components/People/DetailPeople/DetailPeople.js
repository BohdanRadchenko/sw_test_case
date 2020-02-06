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

  return (<div>
      <p>Name : {name}</p>
      <p>height : {height}</p>
      <p>mass : {mass}</p>
      <p>hair_color : {hair_color}</p>
      <p>skin_color : {skin_color}</p>
      <p>eye_color : {eye_color}</p>
      <p>birth_year : {birth_year}</p>
      <p>gender : {gender}</p>

    {/*FILMS*/}
    {!!allFilms.length && (
      <div>
        <h2>films</h2>
        <FilmsList film={film}/>
      </div>
    )}

      {/*PLANETS*/}
      {!!allPlanets.length && (
        <div>
        <h2>homeworld</h2>
        <PlanetsList planets={allPlanets}/>
        </div>
      )}

    {/*STARSHIPS*/}
    {!!allStarships.length && (
      <div>
        <h2>starships</h2>
        <StarshipsList starships={allStarships}/>
      </div>
    )}

    {/*VEHICLES*/}
    {!!allVehicles.length && (
      <div>
        <h3>vehicles</h3>
        <VehiclesList vehicles={allVehicles}/>
      </div>
    )}

    {/*SPECIES*/}
    {!!allSpecies.length && (
      <div>
        <h2>species</h2>
        <SpeciesList species={allSpecies}/>
      </div>
    )}

    <button
      className="btn darken-4 right"
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

