import React from 'react';
import * as filmsSelectors from '../../../redux/films/filmsSelectors'
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import { connect } from "react-redux";
import { NavLink, useHistory} from "react-router-dom";
import FilmsList from "../../Films/FilmsList/FilmsList";
import PeopleList from "../../People/PeopleList/PeopleList";
import css from "../../Vehicles/DetailVehicles/DetailVehicles.module.css";

const DetailPlanets = ({
                         name,
                         rotation_period,
                         orbital_period,
                         diameter,
                         climate,
                         gravity,
                         terrain,
                         surface_water,
                         population,
                         residents,
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

  return (<div className={css.container}>
    <p className={css.p}>Name : {name}</p>
    <p className={css.p}>rotation_period : {rotation_period}</p>
    <p className={css.p}>orbital_period : {orbital_period}</p>
    <p className={css.p}>diameter : {diameter}</p>
    <p className={css.p}>climate : {climate}</p>
    <p className={css.p}>gravity : {gravity}</p>
    <p className={css.p}>terrain : {terrain}</p>
    <p className={css.p}>surface_water : {surface_water}</p>
    <p className={css.p}>population : {population}</p>

    {/*FILMS*/}
    {!!allFilms.length && (
      <div>
        <h2 className={css.title}>films</h2>
        <FilmsList film={film}/>
      </div>
    )}

    {/*RESIDENTS*/}
    {!!allPeople.length && (
      <div>
        <h2 className={css.title}>residents</h2>
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
  allPeople : peopleSelectors.getPeople(state)
})

export default connect(mSTP)(DetailPlanets);
