import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_SUCCESS:
      return payload.films;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_REQUEST:
      return true;

    case ActionType.FETCH_FILMS_SUCCESS:
    case ActionType.FETCH_FILMS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_REQUEST:
      return null;

    case ActionType.FETCH_FILMS_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});