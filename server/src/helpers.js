export const checkDuplicate = array => {
  return array.filter(function(item, index) {
    return array.indexOf(item) >= index
  })
}
