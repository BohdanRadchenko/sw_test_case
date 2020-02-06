import {ActionType} from '../actionType'

//FETCH PLANETS BY ID
export const fetchPlanetsByIdRequest = () => ({
  type: ActionType.FETCH_PLANETS_BY_ID_REQUEST,
  payload : {}
});

export const fetchPlanetsByIdSuccess = planets => ({
  type: ActionType.FETCH_PLANETS_BY_ID_SUCCESS,
  payload : {
    planets,
  }
});

export const fetchPlanetsByIdError = error => ({
  type: ActionType.FETCH_PLANETS_BY_ID_ERROR,
  payload : {
    error,
  }
});

// PLANETS SEARCH
export const searchPlanetsRequest = () => ({
  type: ActionType.SEARCH_PLANETS_REQUEST,
  payload : {}
});

export const searchPlanetsSuccess = planets => ({
  type: ActionType.SEARCH_PLANETS_SUCCESS,
  payload : planets
});

export const searchPlanetsError = error => ({
  type: ActionType.SEARCH_PLANETS_ERROR,
  payload : {
    error,
  }
});

// FETCH PAGINATION
export const fetchPaginationPlanetsRequest = () => ({
  type: ActionType.FETCH_PAGINATION_PLANETS_REQUEST,
  payload : []
});

export const fetchPaginationPlanetsSuccess = planets => ({
  type: ActionType.FETCH_PAGINATION_PLANETS_SUCCESS,
  payload : planets
});

export const fetchPaginationPlanetsError = error => ({
  type: ActionType.FETCH_PAGINATION_PLANETS_ERROR,
  payload : {
    error,
  }
});

