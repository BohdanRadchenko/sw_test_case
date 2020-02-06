import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as planetsSelectors from '../redux/planets/planetsSelectors'
import * as planetsOperations from '../redux/planets/planetsOperations'
import * as peopleOperations from "../redux/people/peopleOperations";
import DetailPlanets from "../components/Planets/DetailPlanets/DetailPlanets";

const DetailPlanetsPage = ({planets, fetchPlanetsById, fetchPeopleById}) => {
  const planetsId = Number(useParams().id)

  useEffect(() => {
      fetchPlanetsById(planetsId)
  }, [])


  if (planets[0]) {
    planets[0].residents.map(el => {
      const count = Number(el.split('/')[5])
      return fetchPeopleById(count)
    })
  }

  return (<div>
    {!!planets.length && (
    <DetailPlanets {...planets[0]}/>
    )}
    </div>)
}

const mSTP = state => ({
  planets : planetsSelectors.getPlanets(state)
})

const mDTP = {
  fetchPlanetsById : planetsOperations.fetchPlanetsById,
  fetchPeopleById: peopleOperations.fetchPeopleById,
}

export default connect(mSTP, mDTP)(DetailPlanetsPage);