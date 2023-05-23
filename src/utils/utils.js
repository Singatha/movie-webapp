import { GENRES } from "./constants"

export const formatGenresByID = (genre_ids) => {
  let genres = ''
  genre_ids.map((id, index) => {
    if (index === 0){
      genres += `${GENRES[id]}`
    } else {
      genres += `, ${GENRES[id]}`
    }
  })
  return genres
}

export const formatGenresByName = (genres) => {
  let genresConcat = ''
  genres.map((genre, index) => {
    if (index === 0){
      genresConcat += `${genre.name}`
    } else {
      genresConcat += `, ${genre.name}`
    }
  })
  return genresConcat
}

export const formatTime = (time) => {
  let hours = Math.floor(time/60)
  let minutes = time % 60
  let format = ''

  if (time <= 60){
    format = `${time}min`
  } else {
    format = `${hours}h ${minutes}min`
  }

  return format
}
