import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

//FETCH VEHICLES
const vehiclesReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_VEHICLES_BY_ID_REQUEST:
      return [];

    case ActionType.FETCH_VEHICLES_BY_ID_SUCCESS:
      return [...state, payload.vehicles];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_VEHICLES_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_VEHICLES_BY_ID_SUCCESS:
    case ActionType.FETCH_VEHICLES_BY_ID_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_VEHICLES_BY_ID_REQUEST:
    case ActionType.FETCH_VEHICLES_BY_ID_SUCCESS:
      return null;

    case ActionType.FETCH_VEHICLES_BY_ID_ERROR:
      return payload.error;

    default:
      return state;
  }
};

//SEARCH VEHICLES
const searchVehiclesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.SEARCH_VEHICLES_REQUEST :
      return []

    case ActionType.SEARCH_VEHICLES_SUCCESS :
      return payload;

    default:
      return state;
  }
}

//PAGINATION
const paginationVehiclesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_PAGINATION_VEHICLES_REQUEST :
      return []

    case ActionType.FETCH_PAGINATION_VEHICLES_SUCCESS :
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: vehiclesReducers,
  loading: loadingReducer,
  error: errorReducer,
  paginationVehicles : paginationVehiclesReducer,
  search : searchVehiclesReducer,
});