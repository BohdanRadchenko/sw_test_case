export const getPeople = state => state.people.items.sort((a, b) => {
 return a.name > b.name
})

export const getLoading = state => state.people.loading

//SEARCH
export const peopleSearch = state => state.people.search


//PAGINATION
export const paginationPeople = state => state.people.paginationPeople.results

export const peoplePrev = state => state.people.paginationPeople.previous

export const peopleNext = state => state.people.paginationPeople.next
