import { useGetMovieQuery } from "../services/movie"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard";

const MovieList = () => {
    const { data, error, isLoading } = useGetMovieQuery();

    if (error){
        return <>Oh no, there was an error</>
    } else if (isLoading){
        return <>Loading...</>
    } else {
        return (
            <div>
                {
                    data.results.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <Link className="home-layout__link" to={`/movies/${movie.id}`}><MovieCard movie={movie} /></Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MovieList