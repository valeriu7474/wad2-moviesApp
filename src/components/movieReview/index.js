
import React from "react";

export default ({ review }) => {
  return (
    <>
    <div className="moviereviewbox">
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
      </div>
    </>
  );
};