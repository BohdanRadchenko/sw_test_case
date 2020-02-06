import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailPeople from "../components/People/DetailPeople/DetailPeople";
import * as peopleSelectors from "../redux/people/peopleSelectors";
import * as peopleOperations from '../redux/people/peopleOperations'
import * as planetsOperations from "../redux/planets/planetsOperations";
import * as starshipsOperation from "../redux/starships/starshipsOperations";
import * as vehiclesOperations from "../redux/vehicles/vehiclesOperations";
import * as speciesOperations from "../redux/species/speciesOperations";

const DetailPeoplePage = ({
                            people,
                            fetchPeopleById,
                            fetchPlanetsById,
                            fetchStarshipsById,
                            fetchVehiclesById,
                            fetchSpeciesById
                          }) => {
  const peopleId = Number(useParams().id)
  const character = people.filter(el => el.id === peopleId)

  useEffect(() => {
    if (!!!people.length) {
      fetchPeopleById(peopleId)
    }
  }, [fetchPeopleById])

  if (character[0]) {
    const count = Number(character[0].homeworld.split('/')[5])
    fetchPlanetsById(count)

    character[0].starships.map(el => {
      const count = Number(el.split('/')[5])
      return fetchStarshipsById(count)
    })

    character[0].vehicles.map(el => {
      const count = Number(el.split('/')[5])
      return fetchVehiclesById(count)
    })
    character[0].species.map(el => {
      const count = Number(el.split('/')[5])
      return fetchSpeciesById(count)
    })
  }

  return (<div>
    {!!character.length && <DetailPeople {...character[0]}/>}
  </div>)
}

const mSTP = state => ({
  people: peopleSelectors.getPeople(state)
})

const mDTP = {
  fetchPeopleById: peopleOperations.fetchPeopleById,
  fetchPlanetsById: planetsOperations.fetchPlanetsById,
  fetchStarshipsById: starshipsOperation.fetchStarshipsById,
  fetchVehiclesById: vehiclesOperations.fetchVehiclesById,
  fetchSpeciesById: speciesOperations.fetchSpeciesById,
}

export default connect(mSTP, mDTP)(DetailPeoplePage)
