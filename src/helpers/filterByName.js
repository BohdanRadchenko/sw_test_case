export const filterByName = (array, value) => {
  if(!array.length) {
    return array
  }

  return array.filter(el => el.title.toLowerCase()
    .includes(value.toLowerCase()))
}