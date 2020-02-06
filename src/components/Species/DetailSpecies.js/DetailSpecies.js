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
    <div>
    <p>Name : {name}</p>
    <p>classification : {classification}</p>
    <p>designation : {designation}</p>
    <p>average_height : {average_height}</p>
    <p>skin_colors : {skin_colors}</p>
    <p>hair_colors : {hair_colors}</p>
    <p>eye_colors : {eye_colors}</p>
    <p>average_lifespan : {average_lifespan}</p>
    <p>language : {language}</p>

      {/*PLANETS*/}
      {!!allPlanets.length && (
        <div>
          <h2>homeworld</h2>
          <PlanetsList planets={allPlanets}/>
        </div>
      )}

      {/*PEOPLE*/}
      {!!allPeople.length && (
        <div>
          <h2>people</h2>
          <PeopleList people={allPeople}/>
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
  allPeople : peopleSelectors.getPeople(state),
})

export default connect(mSTP)(DetailSpecies);