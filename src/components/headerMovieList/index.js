import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;