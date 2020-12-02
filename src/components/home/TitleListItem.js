import React from 'react';
import ListToggle from './ListToggle';

const TitleListItem = (props) => {
  return (
    <div className="Item" style={{ backgroundImage: 'url(' + props.backdrop + ')' }} >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.score}</div>
        <div className="plot">{props.overview}</div>
        <ListToggle />
      </div>
    </div>
  )
};

export default TitleListItem;