import axios from 'axios';
import {
  fetchPlanetsByIdRequest,
  fetchPlanetsByIdSuccess,
  fetchPlanetsByIdError,
  fetchPaginationPlanetsRequest,
  fetchPaginationPlanetsSuccess
} from './planetsActions';



export const fetchPlanetsById = (count) => dispatch => {
const URL = `https://swapi.co/api/planets/${count}`
  dispatch(fetchPlanetsByIdRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchPlanetsByIdSuccess({...response.data, id : count}));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(fetchPlanetsByIdError(error));
    });
};

//
export const fetchPaginationPlanets = page => dispatch => {
  dispatch(fetchPaginationPlanetsRequest())
  const URL = `https://swapi.co/api/planets/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationPlanetsSuccess(response.data)))
    .catch(error => {
      console.log(error.message)
    })
}