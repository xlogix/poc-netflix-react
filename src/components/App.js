import React, { useState } from 'react';

import Trending from './Trending';
import Header from './home/Header';
import Hero from './home/Hero';
import Slider from "./slider/slider.js";
import Gif from './Gif';
import { fetchRandomGif } from '../api/fetch.gif'
global.myLazyload = require('lazyloadjs')();

const App = () => {
  const [searchText, setSearchState] = useState('');
  const [gif, setGif] = useState({});
  const [loader, setLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = async (searchText) => {
    setIsError(false);
    setLoader(true);

    try {
      const { data } = await fetchRandomGif(searchText);
      const getDetails = {
        image: data.fixed_height_downsampled_url,
        title: data.title,
        gifUrl: data.url
      }
      setGif(getDetails);
      setSearchState(searchText);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <div className="container">
      <Header />
      <Hero />
      {/* <Search
        onSearch={search}
      />
      { isError && <div>Something went wrong ...</div>} */}
      {/* <Gif
        loader={loader}
        data={gif}
      />*/}
      {/* <Trending /> */}
      <Slider movies={gif} />
    </div>
  );
};

export default App;

