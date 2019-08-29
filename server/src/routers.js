import Axios from 'axios'
import { checkDuplicate } from './helpers'

export const getCharacterByFilm = (req, res) => {
  Axios.get(`https://swapi.co/api/films/?search=${req.params.term}`)
    .then(films => {
      if (films.data.count === 0) {
        new Error('Film not found, try again!!')
      }

      let charactersArray = []

      films.data.results.forEach(characters => {
        characters.characters.forEach(character => {
          charactersArray.push(character)
        })
      })

      return Promise.all(
        checkDuplicate(charactersArray).map(url => Axios.get(url))
      )
    })
    .then(characters => {})
    .catch(console.error)
}
