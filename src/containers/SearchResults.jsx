import { useGetSearchMultiQuery } from "../services/media"
import { useSelector } from "react-redux"
import Error from "../components/Error"
import Loading from "../components/Loading"
import MediaList from "./MediaList"

const SearchResults = () => {
    const searchString = useSelector((state) => state.media.searchString)
    const { data, error, isLoading } = useGetSearchMultiQuery(searchString)
    
    if (error){
        return <Error />
    } else if (isLoading){
        return <Loading />
    } else {
        return (
            <MediaList data={data} isSlider={true} />
        )
    }
}

export default SearchResults
