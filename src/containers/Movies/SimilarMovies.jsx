import { useGetSimilarMoviesByIDQuery } from "../../services/media"
import PropTypes from 'prop-types'
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const SimilarMovies = ({ movieID }) => {
    const { data, error, isLoading } = useGetSimilarMoviesByIDQuery(movieID)

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

SimilarMovies.propTypes = {
    movieID: PropTypes.string,
}

export default SimilarMovies
