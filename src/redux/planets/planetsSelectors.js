export const getPlanets = state => state.planets.items

export const getLoading = state => state.planets.loading

//PAGINATION
export const paginationPlanets = state => state.planets.paginationPlanets.results

export const planetsPrev = state => state.planets.paginationPlanets.previous

export const planetsNext = state => state.planets.paginationPlanets.next
