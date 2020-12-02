import React from "react";

require("./style.scss");

const SliderItem = ({ movie, width }) => {
  return (
    <div className="slider-item" style={{ width: `${width}%` }}>
      <img
        className="slider-image"
        src={movie.images.original.url}
        alt={movie.title}
      />
    </div>
  );
};

export default SliderItem;