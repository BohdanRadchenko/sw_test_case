import {ActionType} from '../actionType'

// FETCH SPECIES
export const fetchSpeciesByIdRequest = () => ({
  type: ActionType.FETCH_SPECIES_BY_ID_REQUEST,
});

export const fetchSpeciesByIdSuccess = species => ({
  type: ActionType.FETCH_SPECIES_BY_ID_SUCCESS,
  payload : {
    species,
  }
});

export const fetchSpeciesByIdError = error => ({
  type: ActionType.FETCH_SPECIES_BY_ID_ERROR,
  payload : {
    error,
  }
});

// SPECIES SEARCH
export const searchSpeciesRequest = () => ({
  type: ActionType.SEARCH_SPECIES_REQUEST,
  payload : {}
});

export const searchSpeciesSuccess = species => ({
  type: ActionType.SEARCH_SPECIES_SUCCESS,
  payload : species
});

export const searchSpeciesError = error => ({
  type: ActionType.SEARCH_SPECIES_ERROR,
  payload : {
    error,
  }
});

// FETCH PAGINATION
export const fetchPaginationSpeciesRequest = () => ({
  type: ActionType.FETCH_PAGINATION_SPECIES_REQUEST,
  payload : []
});

export const fetchPaginationSpeciesSuccess = species => ({
  type: ActionType.FETCH_PAGINATION_SPECIES_SUCCESS,
  payload : species
});

export const fetchPaginationSpeciesError = error => ({
  type: ActionType.FETCH_PAGINATION_SPECIES_ERROR,
  payload : {
    error,
  }
});
