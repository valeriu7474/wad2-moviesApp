import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <MovieListPageTemplate
      title="Number of Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;
