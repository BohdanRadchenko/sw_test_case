import React  from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from "react-router-dom";
import * as peopleSelectors from '../../../redux/people/peopleSelectors'
import * as filmsSelectors from "../../../redux/films/filmsSelectors";
import PeopleList from "../../People/PeopleList/PeopleList";
import FilmsList from "../../Films/FilmsList/FilmsList";

import css from '../../detail.module.css'

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
      <div className={css.desc}>
      <p className={css.p}>Name:</p>
      <p className={css.i}>{name}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>model:</p>
      <p className={css.i}>{model}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>manufacturer:</p>
      <p className={css.i}>: {manufacturer}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>cost in credits:</p>
      <p className={css.i}>{cost_in_credits}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>length:</p>
      <p className={css.i}>{length}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>max atmosphering speed:</p>
      <p className={css.i}>{max_atmosphering_speed}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>crew:</p>
      <p className={css.i}> {crew}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>passengers:</p>
      <p className={css.i}>{passengers}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>cargo_capacity:</p>
      <p className={css.i}>{cargo_capacity}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>consumables:</p>
      <p className={css.i}>{consumables}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>hyperdrive rating:</p>
      <p className={css.i}>{hyperdrive_rating}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>MGLT:</p>
      <p className={css.i}>{MGLT}</p>
      </div>
      <div className={css.desc}>
      <p className={css.p}>starship class:</p>
      <p className={css.i}>{starship_class}</p>
      </div>

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
