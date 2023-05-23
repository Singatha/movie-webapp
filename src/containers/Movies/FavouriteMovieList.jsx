import { useGetFavouriteMoviesByAccountIDQuery } from "../../services/media"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const FavouriteMovieList = () => {
    const { data, error, isLoading } = useGetFavouriteMoviesByAccountIDQuery();

    if (error){
        return <Error/>
    } else if (isLoading){
        return <Loading/>
    } else {
        return (
            <MediaList data={data} isSlider={false} mediaType="movies" />
        )
    }
}

export default FavouriteMovieList
