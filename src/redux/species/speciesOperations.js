import axios from 'axios';
import {
  fetchSpeciesByIdRequest,
  fetchSpeciesByIdSuccess,
  fetchSpeciesByIdError,
  fetchPaginationSpeciesRequest,
  fetchPaginationSpeciesSuccess
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
      dispatch(fetchSpeciesByIdError(error));
    });
};
export const fetchPaginationSpecies = page => dispatch => {
  dispatch(fetchPaginationSpeciesRequest())
  const URL = `https://swapi.co/api/species/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationSpeciesSuccess(response.data)))
}