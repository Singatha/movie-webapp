import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"
import { useGetUpcomingMoviesQuery } from "../services/movie"
import Slider from "react-slick";

const Upcoming = () => {
    const { data, error, isLoading } = useGetUpcomingMoviesQuery()
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
                            <Link className="home-layout__link" to={`/movies/${movie.id}`}><MovieCard movie={movie} /></Link>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

export default Upcoming
