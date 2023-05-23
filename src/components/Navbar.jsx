import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setDisplaySearchResults, setSearchString } from "../features/media/mediaSlice"
import { useState } from "react"
import PropTypes from 'prop-types'

const Navbar = ({ className }) => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setDisplaySearchResults(true))
        dispatch(setSearchString(inputValue))
    }
    
    return (
        <div className={className === '' ? `navbar`: `navbar navbar--${className}`}>
            <div className="navbar__link-wrapper">
                <Link className="navbar__link navbar__link--hovered" to="/">Home</Link>
                <Link className="navbar__link navbar__link--hovered" to="/list/tv">TV Series</Link>
                <Link className="navbar__link navbar__link--hovered" to="/list/movies">Movies</Link>
                <Link className="navbar__link navbar__link--hovered" to="/list/favourite-movies">Favourite Movies</Link>
                <Link className="navbar__link navbar__link--hovered" to="/list/favourite-tv-series">Favourite TV Series</Link>
            </div>
            <form className="navbar__form" onSubmit={handleSubmit}>
                <input className="navbar__input navbar__input--focused" type="text" placeholder="Search Movie or TV Series" onChange={(e) => setInputValue(e.target.value)} />
                <button className="navbar__btn navbar__btn--hovered">Search</button>
            </form>
        </div>
    )
}

Navbar.propTypes = {
    className: PropTypes.string,
}

export default Navbar
