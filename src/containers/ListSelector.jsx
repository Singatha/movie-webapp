import PropTypes from 'prop-types'
import TVList from './TVList'
import MovieList from "./MovieList"
import FavouriteMovieList from "./FavouriteMovieList"
import FavouriteTVList from "./FavouriteTVList"

const ListSelector = ({ listName }) => {
    switch (listName){
        case 'tv':
            return <TVList />
        case 'movies':
            return <MovieList />
        case 'favourite-movies':
            return <FavouriteMovieList />
        case 'favourite-tv-series':
            return <FavouriteTVList />
        default:
            return <p>no list</p>
    }
}

ListSelector.propTypes = {
    listName: PropTypes.string,
}

export default ListSelector
