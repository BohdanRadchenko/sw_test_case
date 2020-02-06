import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as speciesSelectors from '../redux/species/speciesSelectors'
import * as speciesOperations from '../redux/species/speciesOperations'
import DetailSpecies
  from "../components/Species/DetailSpecies.js/DetailSpecies";
import * as planetsOperations from "../redux/planets/planetsOperations";
import * as peopleOperations from "../redux/people/peopleOperations";
import DetailVehicles
  from "../components/Vehicles/DetailVehicles/DetailVehicles";

const DetailSpeciesPage = ({
                             species,
                             fetchSpeciesById,
                             fetchPlanetsById,
                             fetchPeopleById
                           }) => {
  const speciesId = Number(useParams().id)


  if(species[0]) {
    if (species[0].homeworld) {
    const count = Number(species[0].homeworld.split('/')[5])
    fetchPlanetsById(count)
    }

    species[0].people.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPeopleById(count)
    })
  }

  useEffect(() => {
    if (!!!species.length) {
      fetchSpeciesById(speciesId)
    }
  }, [fetchSpeciesById, species.length, speciesId])


  return (
    <div>
      {species[0] && <DetailSpecies {...species[0]}/>}

  </div>
  )
}

const mSTP = state => ({
  species : speciesSelectors.getAllSpecies(state)
})

const mDTP = {
  fetchSpeciesById : speciesOperations.fetchSpeciesById,
  fetchPlanetsById: planetsOperations.fetchPlanetsById,
  fetchPeopleById: peopleOperations.fetchPeopleById,
}

export default connect(mSTP, mDTP)(DetailSpeciesPage);

