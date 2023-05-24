import { useGetTVQuery } from "../../services/media"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MediaList from "../MediaList"

const TVList = () => {
    const { data, error, isLoading } = useGetTVQuery();

    if (error){
        return <Error error={error} />
    } else if (isLoading){
        return <Loading/>
    } else {
        return (
            <MediaList data={data} isSlider={false} mediaType="tv" />
        )
    }
}

export default TVList
