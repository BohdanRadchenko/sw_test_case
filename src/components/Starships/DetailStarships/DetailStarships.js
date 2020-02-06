import React  from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from "react-router-dom";
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import * as filmsSelectors from "../../../redux/films/filmsSelectors";
import PeopleList from "../../People/PeopleList/PeopleList";
import FilmsList from "../../Films/FilmsList/FilmsList";

import css from './DetailStarships.module.css'


const DetailStarships = ({
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
                           hyperdrive_rating,
                           MGLT,
                           starship_class,
                           pilots,
                           films,
                           allPeople,
                           allFilms,
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
      <p className={css.p}>Name : {name}</p>
      <p className={css.p}>model : {model}</p>
      <p className={css.p}>manufacturer : {manufacturer}</p>
      <p className={css.p}>cost_in_credits : {cost_in_credits}</p>
      <p className={css.p}>length : {length}</p>
      <p className={css.p}>max_atmosphering_speed : {max_atmosphering_speed}</p>
      <p className={css.p}>crew : {crew}</p>
      <p className={css.p}>passengers : {passengers}</p>
      <p className={css.p}>cargo_capacity : {cargo_capacity}</p>
      <p className={css.p}>consumables : {consumables}</p>
      <p className={css.p}>hyperdrive_rating : {hyperdrive_rating}</p>
      <p className={css.p}>MGLT : {MGLT}</p>
      <p className={css.p}>starship_class : {starship_class}</p>

      {/*PILOTS*/}
      {!!allPeople.length && (
        <div>
          <h2 className={css.title}>pilots</h2>
          <PeopleList people={allPeople}/>
        </div>
      )}

      {/*FILMS*/}
      {!!allFilms.length && (
        <div>
          <h2 className={css.title}>films</h2>
          <FilmsList film={film}/>
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
  allPeople : peopleSelectors.getPeople(state)
})

export default connect(mSTP)(DetailStarships);
