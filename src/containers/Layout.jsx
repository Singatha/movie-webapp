import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"

function Layout() {

    return (
        <div className="home-layout">
            <Navbar />
            <div className="home-layout-overlay-text">
                <h1 className="home-layout__text">Movie title</h1>
                <p className="home-layout__text home-layout__text--light">Movie category</p>
                <h3 className="home-layout__text">Description</h3>
                <p className="home-layout__text home-layout__text--light">Movie rating Movie duration</p>
            </div>

            <h3 className="home-layout__header">New Releases</h3>
            <Link className="home-layout__link" to="/movies/1"><MovieCard /></Link>
            
            <h3 className="home-layout__header">Movies</h3>
            <Link className="home-layout__link" to="/movies/1"><MovieCard /></Link>

            <h3 className="home-layout__header">TV Series</h3>
            <Link className="home-layout__link" to="/movies/1"><MovieCard /></Link>

            <Footer />
        </div>
    )
}
    
export default Layout
