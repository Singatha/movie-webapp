import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/list">TV Series</Link>
                <Link className="navbar__link" to="/list">Movies</Link>
                <Link className="navbar__link" to="/list">Favourites</Link>
            </div>
            <form className="navbar-form">
                <input className="navbar-form__input" type="text" placeholder="Search Movie or TV Series" />
                <button className="navbar-form__btn">Search</button>
            </form>
        </div>
    )
}

export default Navbar
