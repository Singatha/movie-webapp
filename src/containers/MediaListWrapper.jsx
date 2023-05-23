import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import ListSelector from "./ListSelector"
import SearchResults from "./SearchResults"
import { useSelector } from "react-redux"

const MediaListWrapper = () => {
  const { mediaType } = useParams()
  const displaySearchResults = useSelector((state) => state.media.displaySearchResults)

  return (
    <div className="media-list">
      <Navbar />
      {
        displaySearchResults ? <SearchResults /> : <ListSelector listName={mediaType} />
      }
      <Footer />
    </div>
  )
}
    
export default MediaListWrapper
