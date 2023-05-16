import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function MovieDetail() {

  return (
    <div className="movie-detail">
      <Navbar />
      <div className="movie-details-row">
        <img className="movie-details-row__img" src="" alt=""/>
        <div className="movie-details">
          <p className="movie-details__text">Movie title</p>
          <p className="movie-details__text">Movie category</p>
          <p className="movie-details__text">Movie imdb score</p>
          <p className="movie-details__text">Movie country, date</p>
          <p className="movie-details__text">Movie rating</p>
          <p className="movie-details__text">Movie duration</p>
          <p className="movie-details__text">Movie director</p>
          <p className="movie-details__text">Movie actors</p>
        </div>
      </div>
      <h3 className="movie-detail__h3 movie-detail__h3--center">Description</h3>
      <p className="movie-detail__text">lorem</p>
      {/* add video tag to watch trailer */}
      <h3 className="movie-detail__h3 movie-detail__h3--shift">You may also like</h3>
      <Link className="movie-detail__link" to="/movies/1"><MovieCard /></Link>
      <Footer />
    </div>
  )
}
  
export default MovieDetail
