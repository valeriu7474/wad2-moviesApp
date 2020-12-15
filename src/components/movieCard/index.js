import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="size">
    <div className="flip-card">
      <div className="flip-card-inner" >
      <div class="flip-card-front">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        </div>
    

        <Link to={`/movies/${movie.id}`}>
        <div className="flip-card-back">
          
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
            <div className="card-footer">
           {action(movie)}
        </div>
          </p>
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;