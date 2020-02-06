export const getAllSpecies = state => state.species.items

export const getLoading = state => state.species.loading

//PAGINATION
export const paginationSpecies = state => state.species.paginationSpecies.results

export const speciesPrev = state => state.species.paginationSpecies.previous

export const speciesNext = state => state.species.paginationSpecies.next
