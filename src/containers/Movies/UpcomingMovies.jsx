import { useGetUpcomingMoviesQuery } from "../../services/media"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const UpcomingMovies = () => {
    const { data, error, isLoading } = useGetUpcomingMoviesQuery()

    if (error){
        return <Error/>
    } else if (isLoading){
        return <Loading/>
    } else {
        return (
            <MediaList data={data} isSlider={true} mediaType="movies" />
        )
    }
}

export default UpcomingMovies
