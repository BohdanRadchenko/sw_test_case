import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as filmsSelectors from "../../../redux/films/filmsSelectors";
import * as peopleSelectors from "../../../redux/people/peopleSelectors";
import PeopleList from "../../People/PeopleList/PeopleList";
import FilmsList from "../../Films/FilmsList/FilmsList";

const DetailVehicles = ({
                          name,
                          model,
                          manufacturer,
                          cost_in_credits,
                          length,
                          max_atmosphering_speed,
                          crew,
                          passengers,
                          cargo_capacity,
                          consumables,
                          vehicle_class,
                          pilots,
                          films,
                          allFilms,
                          allPeople
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
    <div>
      <p>Name : {name}</p>
      <p>model : {model}</p>
      <p>manufacturer : {manufacturer}</p>
      <p>cost_in_credits : {cost_in_credits}</p>
      <p>length : {length}</p>
      <p>max_atmosphering_speed : {max_atmosphering_speed}</p>
      <p>crew : {crew}</p>
      <p>passengers : {passengers}</p>
      <p>cargo_capacity : {cargo_capacity}</p>
      <p>consumables : {consumables}</p>
      <p>vehicle_class : {vehicle_class}</p>

      {/*PILOTS*/}
      {!!allPeople.length && (
        <div>
          <h2>pilots</h2>
          <PeopleList people={allPeople}/>
        </div>
      )}

      {/*FILMS*/}
      {!!allFilms.length && (
        <div>
          <h2>films</h2>
          <FilmsList film={film}/>
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
  allPeople : peopleSelectors.getPeople(state)
})

export default connect(mSTP)(DetailVehicles)

