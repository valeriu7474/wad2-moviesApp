import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="text-black d-flex flex-row-reverse">
      <div className="nomoviesbox">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;