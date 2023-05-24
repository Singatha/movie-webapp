import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useGetMovieByIDQuery } from "../services/media"
import Error from "../components/Error"
import Loading from "../components/Loading"
import { formatTime, formatGenresByName } from "../utils/utils"
import moment from "moment"
import SimilarTv from "./Tv/SimilarTv"
import SimilarMovies from "./Movies/SimilarMovies"

const MediaDetail = () => {
  const { mediaID, mediaType } = useParams()
  const { data, error, isLoading } = useGetMovieByIDQuery(mediaID)
  
  if (error){
    return <Error error={error} />
  } else if (isLoading){
    return <Loading/>
  } else {
    return (
      <div className="media-detail">
        <Navbar />
        <div className="media-detail__wrapper">
          <img className="media-detail__img" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="media Poster"/>
          <div className="media-detail__content">
            <p className="media-detail__text media-detail__title">{data.title ?? data.original_title}</p>
            <p className="media-detail__text media-detail__genre">{formatGenresByName(data.genres)}</p>
            <p className="media-detail__text media-detail__date"><span className="media-detail__text--bold">Date: </span>{moment(data.first_air_date).format('ll') ?? moment(data.release_date).format('ll')}</p>
            <p className="media-detail__text media-detail__duration"><span className="media-detail__text--bold">Duration: </span>{formatTime(data.runtime) ?? formatTime(data.episode_run_time)}</p>
            <p className="media-detail__text media-detail__overview"><span className="media-detail__text--bold">Overview: </span>{data.overview}</p>
          </div>
        </div>

        <h3 className="media-detail__similar-title media-detail__similar-title--shift">You may also like</h3>
        {
          mediaType === 'tv' ? <SimilarTv tvID={mediaID}/> : <SimilarMovies movieID={mediaID}/>
        }

        <Footer />
      </div>
    )
  }
}
  
export default MediaDetail
