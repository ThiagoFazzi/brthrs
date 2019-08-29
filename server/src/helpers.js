export const checkDuplicate = array => {
  return array.filter(function(item, index) {
    return array.indexOf(item) >= index
  })
}

export const sortByHeight = (array, sort) => {
  if (sort === 'DESC') {
    return array.sort((a, b) => b.height - a.height)
  } else {
    return array.sort((a, b) => a.height - b.height)
  }
}
