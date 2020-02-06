import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const starshipsReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STARSHIPS_BY_ID_REQUEST:
      return [];

    case ActionType.FETCH_STARSHIPS_BY_ID_SUCCESS:
      return [...state, payload.planets];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STARSHIPS_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_STARSHIPS_BY_ID_SUCCESS:
    case ActionType.FETCH_STARSHIPS_BY_ID_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_STARSHIPS_BY_ID_REQUEST:
    case ActionType.FETCH_STARSHIPS_BY_ID_SUCCESS:
      return null;

    case ActionType.FETCH_STARSHIPS_BY_ID_ERROR:
      return payload.error;

    default:
      return state;
  }
};

//SEARCH STARSHIPS
const searchStarshipsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.SEARCH_STARSHIPS_REQUEST :
      return []

    case ActionType.SEARCH_STARSHIPS_SUCCESS :
      return payload;

    default:
      return state;
  }
}

//PAGINATION
const paginationStarshipsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_PAGINATION_STARSHIPS_REQUEST :
      return []

    case ActionType.FETCH_PAGINATION_STARSHIPS_SUCCESS :
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: starshipsReducers,
  loading: loadingReducer,
  error: errorReducer,
  paginationStarships : paginationStarshipsReducer,
  search : searchStarshipsReducer,
});