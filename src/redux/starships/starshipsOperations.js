import axios from 'axios';
import {
  fetchStarshipsByIdRequest,
  fetchStarshipsByIdSuccess,
  fetchStarshipsByIdError,
  fetchPaginationStarshipsRequest,
  fetchPaginationStarshipsSuccess,
  searchStarshipsError,
  searchStarshipsSuccess,
  searchStarshipsRequest
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
      console.log(error.message)
      dispatch(fetchStarshipsByIdError(error));
    });
};


//SEARCH
export const searchStarships = (name) => dispatch => {
  const URL = `https://swapi.co/api/starships/?search=${name}`;
  dispatch(searchStarshipsRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(searchStarshipsSuccess(response.data.results));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(searchStarshipsError(error));
    });
};

export const fetchPaginationStarships = page => dispatch => {
  dispatch(fetchPaginationStarshipsRequest())
  const URL = `https://swapi.co/api/starships/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationStarshipsSuccess(response.data)))
    .catch(error => {
      console.log(error.message)
    })
}