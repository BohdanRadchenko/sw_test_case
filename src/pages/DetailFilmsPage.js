import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as filmsSelectors from '../redux/films/filmsSelectors'
import * as peopleOperations from '../redux/people/peopleOperations'
import * as planetsOperations from '../redux/planets/planetsOperations'
import * as starshipsOperation from '../redux/starships/starshipsOperations'
import * as vehiclesOperations from '../redux/vehicles/vehiclesOperations'
import * as speciesOperations from '../redux/species/speciesOperations'
import DetailFilms from '../components/Films/DetailFilms/DetailFilms'

export const DetailFilmsPage = ({
  films,
  fetchPeopleById,
  fetchPlanetsById,
  fetchStarshipsById,
  fetchVehiclesById,
  fetchSpeciesById
}) => {
  const filmId = Number(useParams().id)
  const film = films.filter(el => el.episode_id === filmId)[0]

  if (film) {
    film.characters.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPeopleById(count)
    })
    film.planets.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPlanetsById(count)
    })
    film.starships.map(el => {
      const count = Number(el.split('/')[5])
      return fetchStarshipsById(count)
    })
    film.vehicles.map(el => {
      const count = Number(el.split('/')[5])
      return fetchVehiclesById(count)
    })
    film.species.map(el => {
      const count = Number(el.split('/')[5])
      return fetchSpeciesById(count)
    })
  }


  return (
    <div>
      {film &&  <DetailFilms {...film}/>}
    </div>
  )
}

const mSTP = state => ({
  films: filmsSelectors.getAllFilms(state)
})

const mDTP = {
  fetchPeopleById: peopleOperations.fetchPeopleById,
  fetchPlanetsById: planetsOperations.fetchPlanetsById,
  fetchStarshipsById: starshipsOperation.fetchStarshipsById,
  fetchVehiclesById: vehiclesOperations.fetchVehiclesById,
  fetchSpeciesById: speciesOperations.fetchSpeciesById,
}

export default connect(mSTP, mDTP)(DetailFilmsPage)