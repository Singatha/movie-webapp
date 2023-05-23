import { useGetSimilarTVByIDQuery } from "../../services/media"
import PropTypes from 'prop-types'
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const SimilarTv = ({ tvID }) => {
    const { data, error, isLoading } = useGetSimilarTVByIDQuery(tvID)

    if (error){
        return <Error/>
    } else if (isLoading){
        return <Loading/>
    } else {
        return (
            <MediaList data={data} isSlider={true} mediaType="tv"/>
        )
    }
}

SimilarTv.propTypes = {
    tvID: PropTypes.string,
}

export default SimilarTv
