import axios from 'axios';
import {
  fetchSpeciesByIdRequest,
  fetchSpeciesByIdSuccess,
  fetchSpeciesByIdError,
  fetchPaginationSpeciesRequest,
  fetchPaginationSpeciesSuccess,
  searchSpeciesRequest,
  searchSpeciesSuccess,
  searchSpeciesError
} from './speciesActions';

export const fetchSpeciesById = (count) => dispatch => {
const URL = `https://swapi.co/api/species/${count}`
  dispatch(fetchSpeciesByIdRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchSpeciesByIdSuccess({...response.data, id : count}));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(fetchSpeciesByIdError(error));
    });
};

//SEARCH
export const searchSpecies = (name) => dispatch => {
  const URL = `https://swapi.co/api/species/?search=${name}`;
  dispatch(searchSpeciesRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(searchSpeciesSuccess(response.data.results));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(searchSpeciesError(error));
    });
};

export const fetchPaginationSpecies = page => dispatch => {
  dispatch(fetchPaginationSpeciesRequest())
  const URL = `https://swapi.co/api/species/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationSpeciesSuccess(response.data)))
    .catch(error => {
      console.log(error.message)
    })
}