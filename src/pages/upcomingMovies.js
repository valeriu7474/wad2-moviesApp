import React, {useContext} from "react";

import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'





const UpcomingMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.upcoming.filter((m) => {  // New
        return !("favorite" in m);
      });
      return (
        <MovieListPageTemplate
          title="No. Movies"
          movies={movies}  
          action={(movie) => {
            return ;
          }}
        />
        
      );
    };
  
  export default UpcomingMoviesPage;