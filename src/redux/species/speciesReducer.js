import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const speciesReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_SPECIES_BY_ID_REQUEST:
      return [];

    case ActionType.FETCH_SPECIES_BY_ID_SUCCESS:
      return [...state, payload.species];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_SPECIES_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_SPECIES_BY_ID_SUCCESS:
    case ActionType.FETCH_SPECIES_BY_ID_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_SPECIES_BY_ID_REQUEST:
    case ActionType.FETCH_SPECIES_BY_ID_SUCCESS:
      return null;

    case ActionType.FETCH_SPECIES_BY_ID_ERROR:
      return payload.error;

    default:
      return state;
  }
};

//PAGINATION
const paginationSpeciesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_PAGINATION_SPECIES_REQUEST :
      return []

    case ActionType.FETCH_PAGINATION_SPECIES_SUCCESS :
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: speciesReducers,
  loading: loadingReducer,
  error: errorReducer,
  paginationSpecies : paginationSpeciesReducer
});