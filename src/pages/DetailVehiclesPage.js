import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailVehicles
  from "../components/Vehicles/DetailVehicles/DetailVehicles";
import * as vehiclesSelectors from '../redux/vehicles/vehiclesSelectors'
import * as peopleOperations from "../redux/people/peopleOperations";
import * as planetsOperations from "../redux/planets/planetsOperations";
import * as starshipsOperation from "../redux/starships/starshipsOperations";
import * as vehiclesOperations from "../redux/vehicles/vehiclesOperations";
import * as speciesOperations from "../redux/species/speciesOperations";
import DetailPeople from "../components/People/DetailPeople/DetailPeople";

const DetailVehiclesPage = ({vehicles, fetchVehiclesById, fetchPeopleById}) => {
  const vehiclesId = Number(useParams().id)

  useEffect(() => {
    fetchVehiclesById(vehiclesId)
  }, [fetchVehiclesById])

  if (vehicles[0]) {
    vehicles[0].pilots.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPeopleById(count)
    })
  }

  return (
    <div>
      {!!vehicles.length &&   <DetailVehicles {...vehicles[0]}/>}
    </div>)
}

const mSTP = state => ({
  vehicles : vehiclesSelectors.getAllVehicles(state)
})

const mDTP = {
  fetchPeopleById: peopleOperations.fetchPeopleById,
  fetchPlanetsById: planetsOperations.fetchPlanetsById,
  fetchStarshipsById: starshipsOperation.fetchStarshipsById,
  fetchVehiclesById: vehiclesOperations.fetchVehiclesById,
  fetchSpeciesById: speciesOperations.fetchSpeciesById,
}

export default connect(mSTP, mDTP)(DetailVehiclesPage)
