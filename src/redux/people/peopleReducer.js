import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const peopleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PEOPLE_BY_ID_REQUEST:
      return [];

    case ActionType.FETCH_PEOPLE_BY_ID_SUCCESS:
      return [...state, payload.people];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PEOPLE_BY_ID_REQUEST:
      return true;

    case ActionType.FETCH_PEOPLE_BY_ID_SUCCESS:
    case ActionType.FETCH_PEOPLE_BY_ID_ERROR:
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

//PAGINATION
const paginationPeopleReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_PAGINATION_PEOPLE_REQUEST :
      return []

    case ActionType.FETCH_PAGINATION_PEOPLE_SUCCESS :
      return payload;

    default:
      return state;
  }
}

//SEARCH
const searchPeopleReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionType.SEARCH_PEOPLE_REQUEST :
      return []

    case ActionType.SEARCH_PEOPLE_SUCCESS :
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: peopleReducer,
  loading: loadingReducer,
  error: errorReducer,
  paginationPeople : paginationPeopleReducer,
  search : searchPeopleReducer,
});