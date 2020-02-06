import axios from 'axios';
import {
  fetchPlanetsByIdRequest,
  fetchPlanetsByIdSuccess,
  fetchPlanetsByIdError,
  fetchPaginationPlanetsRequest,
  fetchPaginationPlanetsSuccess,
  searchPlanetsRequest,
  searchPlanetsSuccess,
  searchPlanetsError
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

//SEARCH
export const searchPlanets = (name) => dispatch => {
  const URL = `https://swapi.co/api/planets/?search=${name}`;
  dispatch(searchPlanetsRequest());
  axios
    .get(URL)
    .then(response => {
      console.log(response.data)
      dispatch(searchPlanetsSuccess(response.data.results));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(searchPlanetsError(error));
    });
};

// PAGINATION
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