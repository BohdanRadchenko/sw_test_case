import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const peopleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PLANETS_BY_ID_REQUEST:
      return [];

    case ActionType.FETCH_PLANETS_BY_ID_SUCCESS:
      return [...state, payload.planets];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PLANETS_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_PLANETS_BY_ID_SUCCESS:
    case ActionType.FETCH_PLANETS_BY_ID_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PEOPLE_BY_ID_REQUEST:
    case ActionType.FETCH_PEOPLE_BY_ID_SUCCESS:
      return null;

    case ActionType.FETCH_PEOPLE_BY_ID_ERROR:
      return payload.error;

    default:
      return state;
  }
};

//SEARCH PLANETS
const searchPlanetsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.SEARCH_PLANETS_REQUEST :
      return []

    case ActionType.SEARCH_PLANETS_SUCCESS :
      return payload;

    default:
      return state;
  }
}

//PAGINATION
const paginationPlanetsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_PAGINATION_PLANETS_REQUEST :
      return []

    case ActionType.FETCH_PAGINATION_PLANETS_SUCCESS :
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: peopleReducer,
  loading: loadingReducer,
  error: errorReducer,
  paginationPlanets : paginationPlanetsReducer,
  search : searchPlanetsReducer,
});