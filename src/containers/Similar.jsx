import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"
import { useGetSimilarMoviesByIDQuery } from "../services/movie"
import Slider from "react-slick";
import PropTypes from 'prop-types'

const Similar = ({ movieID }) => {
    const { data, error, isLoading } = useGetSimilarMoviesByIDQuery(movieID)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8
    };

    if (error){
        return <>Oh no, there was an error</>
    } else if (isLoading){
        return <>Loading...</>
    } else {
        return (
            <Slider {...settings}>
                {data.results.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <Link className="home-layout__link" to={`/movies/${movie.id}`} ><MovieCard movie={movie} /></Link>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

Similar.propTypes = {
    movieID: PropTypes.string,
}

export default Similar
