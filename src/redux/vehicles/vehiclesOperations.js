import axios from 'axios';
import {
  fetchVehiclesByIdRequest,
  fetchVehiclesByIdSuccess,
  fetchVehiclesByIdError,
  fetchPaginationVehiclesRequest, fetchPaginationVehiclesSuccess
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
      dispatch(fetchVehiclesByIdError(error));
    });
};

export const fetchPaginationVehicles = page => dispatch => {
  dispatch(fetchPaginationVehiclesRequest())
  const URL = `https://swapi.co/api/vehicles/?page=${page}`
  axios
    .get(URL)
    .then(response => dispatch(fetchPaginationVehiclesSuccess(response.data)))
}