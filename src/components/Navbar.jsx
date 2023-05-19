import { Link } from "react-router-dom";
// import { useGetSearchMultiQuery } from "../services/movie"

const Navbar = () => {
    // const { data } = useGetSearchMultiQuery()
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/list/tv">TV Series</Link>
                <Link className="navbar__link" to="/list/movies">Movies</Link>
                <Link className="navbar__link" to="/list/favourite-movies">Favourite Movies</Link>
                <Link className="navbar__link" to="/list/favourite-tv-series">Favourite TV Series</Link>
            </div>
            <form className="navbar-form">
                <input className="navbar-form__input" type="text" placeholder="Search Movie or TV Series" />
                <button className="navbar-form__btn">Search</button>
            </form>
        </div>
    )
}

export default Navbar
