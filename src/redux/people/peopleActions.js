import {ActionType} from '../actionType'

// FETCH BY ID
export const fetchPeopleByIdRequest = () => ({
  type: ActionType.FETCH_PEOPLE_BY_ID_REQUEST,
  payload : {}
});

export const fetchPeopleByIdSuccess = people => ({
  type: ActionType.FETCH_PEOPLE_BY_ID_SUCCESS,
  payload : {
    people,
  }
});

export const fetchPeopleByIdError = error => ({
  type: ActionType.FETCH_PEOPLE_BY_ID_ERROR,
  payload : {
    error,
  }
});

// PEOPLE SEARCH
export const searchPeopleRequest = () => ({
  type: ActionType.SEARCH_PEOPLE_REQUEST,
  payload : {}
});

export const searchPeopleSuccess = people => ({
  type: ActionType.SEARCH_PEOPLE_SUCCESS,
  payload : people
});

export const searchPeopleError = error => ({
  type: ActionType.SEARCH_PEOPLE_ERROR,
  payload : {
    error,
  }
});


// FETCH PAGINATION
export const fetchPaginationPeopleRequest = () => ({
  type: ActionType.FETCH_PAGINATION_PEOPLE_REQUEST,
  payload : {}
});

export const fetchPaginationPeopleSuccess = people => ({
  type: ActionType.FETCH_PAGINATION_PEOPLE_SUCCESS,
  payload : people
});

export const fetchPaginationPeopleError = error => ({
  type: ActionType.FETCH_PAGINATION_PEOPLE_ERROR,
  payload : {
    error,
  }
});
