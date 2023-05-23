import { useGetFavouriteTVByAccountIDQuery } from "../../services/media"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const FavouriteTVList = () => {
    const { data, error, isLoading } = useGetFavouriteTVByAccountIDQuery();

    if (error){
        return <Error/>
    } else if (isLoading){
        return <Loading/>
    } else {
        return (
            <MediaList data={data} isSlider={false} mediaType="tv" />
        )
    }
}

export default FavouriteTVList
