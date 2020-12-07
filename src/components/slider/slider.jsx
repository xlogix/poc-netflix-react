import React, { useState, useRef, useEffect } from 'react';
import { NewSliderItem } from './slider-item';
import "./slider.scss";
import {
  fetchTrendingGifs, fetchRandomGifs, fetchAngryGifs,
  fetchLoveGifs, fetchDrunkGifs
} from '../../api/fetch.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faUndo } from '@fortawesome/free-solid-svg-icons'


export const NewSlider = (props) => {

  let [cData, setCData] = useState([
    { text: 'itm 1', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 2', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 3', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 4', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 5', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 6', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 7', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 8', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 9', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 10', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 11', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 12', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 13', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 14', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 15', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 16', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 17', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 18', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 19', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 20', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 21', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 22', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 23', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 24', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
    { text: 'itm 25', placeHolder: 'https://media2.giphy.com/media/JsnW1tbH5zpxuk3qB9/giphy.gif', url: 'https://wallpapercave.com/wp/wp2856120.gif' },
  ]);

  let [move, setMove] = useState(false);
  let [init, setInit] = useState(true);
  let [scroll, setScroll] = useState(0);
  const wrapper = useRef(null);

  useEffect(() => {
    const initFun = async () => {
      let data = {};
      if (props.tag === 'trending') {
        data = await fetchTrendingGifs(10, 0);
      }
      if (props.tag === 'random') {
        data = await fetchRandomGifs(10, 0);
      }
      if (props.tag === 'angry') {
        data = await fetchAngryGifs(10, 0);
      }
      if (props.tag === 'love') {
        data = await fetchLoveGifs(10, 0);
      }
      if (props.tag === 'drunk') {
        data = await fetchDrunkGifs(10, 0);
      }
      let newData = data.data.map((itm) => ({
        placeHolder: itm.images["480w_still"]['url'],
        url: itm.images["original"]['url'],
        text: 'GIF here'
      }));
      setCData(newData);
    }
    if (init) {
      initFun();
      setInit(false);
    }
  })

  /* Mouse Touch Events
  const mouseUp = (e) => {
    setScroll(e.clientX)
    setMove(false);
  }

  const mouseDown = (e) => {
    setMove(true);
    setScroll(e.clientX);
  }

  const mouseMove = (e) => {
    if (move) {
      let val = e.pageX - scroll;
      wrapper.current.scrollTo((val * -1), 0);
    }
  }

  const mouseLeave = (e) => {
    isDown = false;
  } 
  */

  useEffect(() => {
    let width = wrapper.current.scrollWidth;
    console.log('width: ' + width);
    let divide = width / 200;
    console.log('divide: ' + divide);
  });

  const moveToLeft = (e) => {
    wrapper.current.scrollBy(-50, 0);
  };

  const moveToRight = (e) => {
    wrapper.current.scrollBy(50, 0);
  };

  return (
    <div className="new-slider">
      <div style={{
        color: "#fff"
      }}>
        <div className="overlay">
          <div className="title">{props.title}</div>
        </div>
      </div>
      <div
        ref={wrapper}
        className="slider-wrapper">
        <div>
          <button className="icon-btn left" onClick={moveToLeft}>
            <span><strong><FontAwesomeIcon icon={faChevronLeft} /></strong></span></button>
        </div>
        <div>
          <button className="icon-btn right" onClick={moveToRight}>
            <span><strong><FontAwesomeIcon icon={faChevronRight} /></strong></span></button>
        </div>

        {cData.map((res, i) =>
          <NewSliderItem
            key={i}
            imgUrl={res.url}
            text={res.text}
            placeholder={res.placeHolder}
          />
        )}
      </div>
    </div>
  )
}

export default NewSlider;