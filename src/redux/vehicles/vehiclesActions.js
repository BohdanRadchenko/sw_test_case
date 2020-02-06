import {ActionType} from '../actionType'

export const fetchVehiclesByIdRequest = () => ({
  type: ActionType.FETCH_VEHICLES_BY_ID_REQUEST,
});

export const fetchVehiclesByIdSuccess = vehicles => ({
  type: ActionType.FETCH_VEHICLES_BY_ID_SUCCESS,
  payload : {
    vehicles,
  }
});

export const fetchVehiclesByIdError = error => ({
  type: ActionType.FETCH_VEHICLES_BY_ID_ERROR,
  payload : {
    error,
  }
});

// FETCH PAGINATION
export const fetchPaginationVehiclesRequest = () => ({
  type: ActionType.FETCH_PAGINATION_VEHICLES_REQUEST,
  payload : []
});

export const fetchPaginationVehiclesSuccess = vehicles => ({
  type: ActionType.FETCH_PAGINATION_VEHICLES_SUCCESS,
  payload : vehicles
});

export const fetchPaginationVehiclesError = error => ({
  type: ActionType.FETCH_PAGINATION_VEHICLES_ERROR,
  payload : {
    error,
  }
});
