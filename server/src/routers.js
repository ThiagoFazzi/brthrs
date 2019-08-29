import Axios from 'axios'

export const getCharacterByFilm = (req, res) => {
  Axios.get(`https://swapi.co/api/films/?search=${req.params.term}`)
    .then(films => {})
    .then(characters => {})
    .catch(console.error)
}
