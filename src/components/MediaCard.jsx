import PropTypes from 'prop-types'
import { formatGenresByID } from '../utils/utils'


const MediaCard = ({ media }) => {

  return (
    <div className="media-card">
      <img className="media-card__img" src={`https://image.tmdb.org/t/p/original/${media.poster_path}`} alt="media Poster" />
      <h5 className="media-card__title">{media.original_title ?? media.original_name}</h5>
      <h6 className="media-card__genre">{formatGenresByID(media.genre_ids)}</h6>
    </div>
  )
}

MediaCard.propTypes = {
  media: PropTypes.object,
}
  
export default MediaCard
