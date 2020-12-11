import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'





const NowPlayingPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.nowplaying.filter((m) => {  // New
        return !("watchlist" in m);
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
  
  export default NowPlayingPage;