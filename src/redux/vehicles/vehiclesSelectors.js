export const getAllVehicles = state => state.vehicles.items

export const getLoading = state => state.vehicles.loading

//SEARCH
export const vehiclesSearch = state => state.vehicles.search

//PAGINATION
export const paginationVehicles = state => state.vehicles.paginationVehicles.results

export const vehiclesPrev = state => state.vehicles.paginationVehicles.previous

export const vehiclesNext = state => state.vehicles.paginationVehicles.next
