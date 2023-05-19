import PropTypes from 'prop-types'
import { GENRES } from '../utils/utils'

const MovieCard = ({ movie }) => {

  return (
    <div className="movie-card">
      <img className="movie-card__img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie Poster" />
      <h5 className="movie-card__header">{movie.original_title ?? movie.original_name}</h5>
      <h6 className="movie-card__text">{
        movie.genre_ids.map((id) => {
          return GENRES[id]
        })
      }</h6>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}
  
export default MovieCard
