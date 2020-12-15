import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getNowPlaying, getPopularMovies, getTopRatedMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying: [...state.nowplaying],
        popular: [...state.popular],
        toprated: [...state.toprated],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], nowplaying: [...state.nowplaying], popular: [...state.popular], toprated: [...state.toprated]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], nowplaying: [...state.nowplaying], popular: [...state.popular], toprated: [...state.toprated]};
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming], popular: [...state.popular], toprated: [...state.toprated]};
    case "load-popular":
      return { popular: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming], nowplaying:[...state.nowplaying], toprated: [...state.toprated]};
    case "load-toprated":
      return { toprated: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming], popular: [...state.popular], nowplaying:[...state.nowplaying]};
    case "add-review":
        return {
            movies: state.movies.map((m) =>
              m.id === action.payload.movie.id
                ? { ...m, review: action.payload.review }
                : m
            ),
          };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowplaying: [], popular: [], toprated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlaying().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying: state.nowplaying,
        popular: state.popular,
        toprated: state.toprated,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;