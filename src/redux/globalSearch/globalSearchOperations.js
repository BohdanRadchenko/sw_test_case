import axios from 'axios';
import {
  fetchGlobalSearchRequest,
  fetchGlobalSearchSuccess,
  fetchGlobalSearchError
} from './globalSearchActions'


export const fetchSearch = (form) => dispatch => {
  const {value, radio} = form;
  const URL = `https://swapi.co/api/${radio}/?search=${value}`;
  dispatch(fetchGlobalSearchRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchGlobalSearchSuccess(response.data.results));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(fetchGlobalSearchError(error));
    });
};