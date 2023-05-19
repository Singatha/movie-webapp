// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '49826d2b92b1877a7659eee47d7ca304';
// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () => `discover/movie?api_key=${API_KEY}`,
    }),
    getMovieByID: builder.query({
      query: (movieID) => `movie/${movieID}?api_key=${API_KEY}`,
    }),
    getFavouriteMoviesByAccountID: builder.query({
      query: (accountID) => `account/${accountID}/favourite/movies?api_key=${API_KEY}`,
    }),
    getTV: builder.query({
      query: () => `discover/tv?api_key=${API_KEY}`,
    }),
    getTVByID: builder.query({
      query: (tvID) => `tv/${tvID}?api_key=${API_KEY}`,
    }),
    getFavouriteTVByAccountID: builder.query({
      query: (accountID) => `account/${accountID}/favourite/tv?api_key=${API_KEY}`,
    }),
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}`,
    }),
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?api_key=${API_KEY}`,
    }),
    getUpcomingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${API_KEY}`,
    }),
    getSimilarMoviesByID: builder.query({
      query: (movieID) => `movie/${movieID}/similar?api_key=${API_KEY}`,
    }),
    getSearchMulti: builder.query({
      query: (keyword) => `search/multi?query=${keyword}&api_key=${API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetMovieQuery,
  useGetMovieByIDQuery,
  useGetFavouriteMoviesByAccountIDQuery, 
  useGetTVQuery,
  useGetTVByIDQuery,
  useGetFavouriteTVByAccountIDQuery, 
  useGetPopularMoviesQuery, 
  useGetTopRatedMoviesQuery, 
  useGetUpcomingMoviesQuery,
  useGetSimilarMoviesByIDQuery, 
  useGetSearchMultiQuery } = movieApi
