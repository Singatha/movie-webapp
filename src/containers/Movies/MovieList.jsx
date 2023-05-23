import { useGetMovieQuery } from "../../services/media"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const MovieList = () => {
    const { data, error, isLoading } = useGetMovieQuery();

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

export default MovieList
