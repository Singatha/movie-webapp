import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import ListSelector from "./ListSelector"

const List = () => {
  const { name } = useParams()

  return (
    <div className="list-block">
      <Navbar />
      <ListSelector listName={name} />
      <Footer />
    </div>
  )
}
    
export default List
