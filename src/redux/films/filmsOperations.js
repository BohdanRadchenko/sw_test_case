import axios from 'axios';
import {
  fetchFilmsRequest,
  fetchFilmsSuccess,
  fetchFilmsError,
} from './filmsActions';

const URL = 'https://swapi.co/api/films/'

export const fetchFilms = (page) => dispatch => {
  dispatch(fetchFilmsRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchFilmsSuccess(response.data.results));
    })
    .catch(error => {
      dispatch(fetchFilmsError(error));
    });
};