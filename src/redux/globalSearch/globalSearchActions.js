import {ActionType} from '../actionType'

//FETCH GLOBAL SEARCH
export const fetchGlobalSearchRequest = () => ({
  type: ActionType.FETCH_GLOBAL_SEARCH_REQUEST,
  payload : {}
});

export const fetchGlobalSearchSuccess = search => ({
  type: ActionType.FETCH_GLOBAL_SEARCH_SUCCESS,
  payload : search
});

export const fetchGlobalSearchError = error => ({
  type: ActionType.FETCH_GLOBAL_SEARCH_ERROR,
  payload : {
    error,
  }
});