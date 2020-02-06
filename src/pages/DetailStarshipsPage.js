import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailStarships
  from "../components/Starships/DetailStarships/DetailStarships";
import * as speciesSelectors from '../redux/species/speciesSelectors'
import * as starshipsSelectors from '../redux/starships/starshipsSelectors'
import * as peopleOperations from "../redux/people/peopleOperations";
import * as planetsOperations from "../redux/planets/planetsOperations";
import * as starshipsOperation from "../redux/starships/starshipsOperations";
import * as vehiclesOperations from "../redux/vehicles/vehiclesOperations";
import * as speciesOperations from "../redux/species/speciesOperations";

const DetailStarshipsPage = ({starships, fetchStarshipsById, fetchPeopleById}) => {
  const starshipsId = Number(useParams().id)

  useEffect(() => {
    fetchStarshipsById(starshipsId)
  }, [])

  if (starships[0]) {
    starships[0].pilots.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPeopleById(count)
    })
  }

  return (<div>
    {starships[0] && <DetailStarships {...starships[0]}/>}
    </div>)
}


const mSTP = state => ({
  starships : starshipsSelectors.getStarships(state)
})

const mDTP = {
  fetchPeopleById: peopleOperations.fetchPeopleById,
  fetchPlanetsById: planetsOperations.fetchPlanetsById,
  fetchStarshipsById: starshipsOperation.fetchStarshipsById,
  fetchVehiclesById: vehiclesOperations.fetchVehiclesById,
  fetchSpeciesById: speciesOperations.fetchSpeciesById,
}

export default connect(mSTP, mDTP)(DetailStarshipsPage);