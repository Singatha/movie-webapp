import PropTypes from 'prop-types'
import TVList from './Tv/TVList'
import MovieList from "./Movies/MovieList"
import FavouriteMovieList from "./Movies/FavouriteMovieList"
import FavouriteTVList from "./Tv/FavouriteTVList"
import { PARAM_NAMES } from '../utils/constants' 

const ListSelector = ({ listName }) => {
    switch (listName){
        case PARAM_NAMES.TV:
            return <TVList />
        case PARAM_NAMES.MOVIES:
            return <MovieList />
        case PARAM_NAMES.FAVOURITE_MOVIES:
            return <FavouriteMovieList />
        case PARAM_NAMES.FAVOURITE_TV_SERIES:
            return <FavouriteTVList />
        default:
            return <p>no list</p>
    }
}

ListSelector.propTypes = {
    listName: PropTypes.string,
}

export default ListSelector
