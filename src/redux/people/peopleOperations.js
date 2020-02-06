import axios from 'axios';
import {
  fetchPeopleByIdRequest,
  fetchPeopleByIdSuccess,
  fetchPeopleByIdError,
  fetchPaginationPeopleRequest,
  fetchPaginationPeopleSuccess
} from './peopleActions';


export const fetchPeopleById = (count) => dispatch => {
const URL = `https://swapi.co/api/people/${count}`
  dispatch(fetchPeopleByIdRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchPeopleByIdSuccess({...response.data, id : count}));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(fetchPeopleByIdError(error));
    });
};

export const fetchPaginationPeople = page => dispatch => {
  dispatch(fetchPaginationPeopleRequest())
  const URL = `https://swapi.co/api/people/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationPeopleSuccess(response.data)))
    .catch(error => {
      console.log(error.message)
    })
}