export const getStarships = state => state.starships.items

export const getLoading = state => state.starships.loading

//SEARCH
export const starshipsSearch = state => state.starships.search

//PAGINATION
export const paginationStarships = state => state.starships.paginationStarships.results

export const starshipsPrev = state => state.starships.paginationStarships.previous

export const starshipsNext = state => state.starships.paginationStarships.next
