import axios from 'axios';
import {
  fetchStarshipsByIdRequest,
  fetchStarshipsByIdSuccess,
  fetchStarshipsByIdError,
  fetchPaginationStarshipsRequest,
  fetchPaginationStarshipsSuccess
} from './starshipsActions';

export const fetchStarshipsById = (count) => dispatch => {
const URL = `https://swapi.co/api/starships/${count}`
  dispatch(fetchStarshipsByIdRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchStarshipsByIdSuccess({...response.data, id : count}));
    })
    .catch(error => {
      dispatch(fetchStarshipsByIdError(error));
    });
};

export const fetchPaginationStarships = page => dispatch => {
  dispatch(fetchPaginationStarshipsRequest())
  const URL = `https://swapi.co/api/starships/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationStarshipsSuccess(response.data)))
}