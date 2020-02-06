import {ActionType} from '../actionType'

export const fetchFilmsRequest = () => ({
  type: ActionType.FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = films => ({
  type: ActionType.FETCH_FILMS_SUCCESS,
  payload : {
    films,
  }
});

export const fetchFilmsError = error => ({
  type: ActionType.FETCH_FILMS_ERROR,
  payload : {
    error,
  }
});
