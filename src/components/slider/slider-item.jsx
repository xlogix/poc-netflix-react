import "./slider.scss";
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

export const NewSliderItem = ({
  imgUrl,
  text,
  placeholder
}) => {
  let [hover, setHover] = useState(false);
  return (
    <div className="new-slider-item" onMouseOver={
      (e) => {
        setHover(true)
      }
    } onMouseOut={(e) => setHover(false)}>
      <LazyLoad>
        <img draggable="false" src={hover ? imgUrl : placeholder} alt="loading..." />
      </LazyLoad>
    </div>
  )
}