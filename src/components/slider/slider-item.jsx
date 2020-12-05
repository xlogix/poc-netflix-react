import React, { useState } from 'react';
global.myLazyload = require('lazyloadjs')();
import "./slider.scss";

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
      <img draggable="false" src={hover ? imgUrl : placeholder} onload="myLazyload(this)" alt="loading..." />
    </div>
  )
}