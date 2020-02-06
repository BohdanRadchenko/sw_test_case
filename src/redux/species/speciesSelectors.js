export const getAllSpecies = state => state.species.items

export const getLoading = state => state.species.loading

//SEARCH
export const speciesSearch = state => state.species.search

//PAGINATION
export const paginationSpecies = state => state.species.paginationSpecies.results

export const speciesPrev = state => state.species.paginationSpecies.previous

export const speciesNext = state => state.species.paginationSpecies.next
