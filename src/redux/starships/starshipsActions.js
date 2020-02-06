import {ActionType} from '../actionType'

export const fetchStarshipsByIdRequest = () => ({
  type: ActionType.FETCH_STARSHIPS_BY_ID_REQUEST,
  payload : {}
});

export const fetchStarshipsByIdSuccess = planets => ({
  type: ActionType.FETCH_STARSHIPS_BY_ID_SUCCESS,
  payload : {
    planets,
  }
});

export const fetchStarshipsByIdError = error => ({
  type: ActionType.FETCH_STARSHIPS_BY_ID_ERROR,
  payload : {
    error,
  }
});


// FETCH PAGINATION
export const fetchPaginationStarshipsRequest = () => ({
  type: ActionType.FETCH_PAGINATION_STARSHIPS_REQUEST,
  payload : []
});

export const fetchPaginationStarshipsSuccess = starships => ({
  type: ActionType.FETCH_PAGINATION_STARSHIPS_SUCCESS,
  payload : starships
});

export const fetchPaginationStarshipsError = error => ({
  type: ActionType.FETCH_PAGINATION_STARSHIPS_ERROR,
  payload : {
    error,
  }
});
