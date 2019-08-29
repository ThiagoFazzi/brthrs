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
    .then(characters => {
      const charactersObject = characters.map(character => {
        return {
          name: character.data.name,
          height: character.data.height,
          url: character.data.url,
          skinColor: character.data.skin_color,
          mass: character.data.mass,
          gender: character.data.gender,
          hairColor: character.data.hair_color,
          eyeColor: character.data.eye_color,
          birthYear: character.data.birth_year
        }
      })

      const charactersObjectSorted = sortByHeight(
        charactersObject,
        req.params.sort
      )

      res.send(charactersObjectSorted)
    })
    .catch(console.error)
}
