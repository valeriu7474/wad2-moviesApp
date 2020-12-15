import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <MovieListPageTemplate
      title="Number of Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return ;
      }}
    />
  );
};

export default TopRatedMoviesPage;
