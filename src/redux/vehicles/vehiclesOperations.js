import axios from 'axios';
import {
  fetchVehiclesByIdRequest,
  fetchVehiclesByIdSuccess,
  fetchVehiclesByIdError,
  fetchPaginationVehiclesRequest,
  fetchPaginationVehiclesSuccess,
  searchVehiclesRequest,
  searchVehiclesSuccess,
  searchVehiclesError
} from './vehiclesActions';

export const fetchVehiclesById = (count) => dispatch => {
const URL = `https://swapi.co/api/vehicles/${count}`
  dispatch(fetchVehiclesByIdRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchVehiclesByIdSuccess({...response.data, id : count}));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(fetchVehiclesByIdError(error));
    });
};

//SEARCH
export const searchVehicles = (name) => dispatch => {
  const URL = `https://swapi.co/api/vehicles/?search=${name}`;
  dispatch(searchVehiclesRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(searchVehiclesSuccess(response.data.results));
    })
    .catch(error => {
      console.log(error.message)
      dispatch(searchVehiclesError(error));
    });
};

export const fetchPaginationVehicles = page => dispatch => {
  dispatch(fetchPaginationVehiclesRequest())
  const URL = `https://swapi.co/api/vehicles/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationVehiclesSuccess(response.data)))
    .catch(error => {
      console.log(error.message)
    })
}