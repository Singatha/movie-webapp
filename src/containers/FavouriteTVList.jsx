import { useGetFavouriteTVByAccountIDQuery } from "../services/movie"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard";

const FavouriteTVList = () => {
    const { data, error, isLoading } = useGetFavouriteTVByAccountIDQuery();

    if (error){
        return <>Oh no, there was an error</>
    } else if (isLoading){
        return <>Loading...</>
    } else {
        return (
            <div>
                {
                    data.results.map((tv) => {
                        return (
                            <div key={tv.id}>
                                <Link className="home-layout__link" to={`/movies/${tv.id}`}><MovieCard movie={tv} /></Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FavouriteTVList
