import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Similar from "./Similar"
import { useParams } from "react-router-dom"
import { useGetMovieByIDQuery } from "../services/movie"

const MovieDetail = () => {
  const { movieID } = useParams()
  const { data, error, isLoading } = useGetMovieByIDQuery(movieID)
  
  if (error){
    return <>Oh no, there was an error</>
  } else if (isLoading){
    return <>Loading...</>
  } else {
    return (
      <div className="movie-detail">
        <Navbar />
        <div className="movie-details-row">
          <img className="movie-details-row__img" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="Movie Poster"/>
          <div className="movie-details">
            <p className="movie-details__text">{data.title}</p>
            <p className="movie-details__text">
              {
                data.genres.map((genre) => {
                  return genre.name
                })
              }
            </p>
            <p className="movie-details__text">Movie imdb score</p>
            <p className="movie-details__text">Movie country, date</p>
            <p className="movie-details__text">Movie rating</p>
            <p className="movie-details__text">Movie duration</p>
            <p className="movie-details__text">Movie director</p>
            <p className="movie-details__text">Movie actors</p>
          </div>
        </div>
        <h3 className="movie-detail__h3 movie-detail__h3--center">Description</h3>
        <p className="movie-detail__text">{data.overview}</p>
  
        <h3 className="movie-detail__h3 movie-detail__h3--shift">You may also like</h3>
        <Similar movieID={movieID} />

        <Footer />
      </div>
    )
  }
}
  
export default MovieDetail
