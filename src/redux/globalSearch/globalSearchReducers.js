import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const itemsReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_GLOBAL_SEARCH_REQUEST:
      return [];

    case ActionType.FETCH_GLOBAL_SEARCH_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_GLOBAL_SEARCH_REQUEST:
      return true;

    case ActionType.FETCH_GLOBAL_SEARCH_SUCCESS:
    case ActionType.FETCH_GLOBAL_SEARCH_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_GLOBAL_SEARCH_REQUEST:
    case ActionType.FETCH_GLOBAL_SEARCH_SUCCESS:
      return null;

    case ActionType.FETCH_GLOBAL_SEARCH_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items : itemsReducers,
  loading : loadingReducer,
  error : errorReducer
});