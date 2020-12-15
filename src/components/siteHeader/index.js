import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";





const SiteHeader = () => {
  return (
    
    <nav className="navbar newhead">
     
       
      <img className="animationlogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          />
      <nav className="navbar-brand text-white">
      
      </nav>


      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/nowplaying">
              Now Playing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/popular">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/toprated">
              Top Rated
            </Link>
          </li>
        </ul>
      </nav>
      
    </nav>
  );
  
};




export default SiteHeader;


