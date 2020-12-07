import React, { useState } from 'react';

import Header from './home/Header';
import Hero from './home/Hero';
import { fetchRandomGifs } from '../api/fetch.gif'
import { NewSlider } from './slider/slider';

const App = () => {
  const [searchText, setSearchState] = useState('');
  const [gif, setGif] = useState({});
  const [loader, setLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = async (searchText) => {
    setIsError(false);
    setLoader(true);

    try {
      const { data } = await fetchRandomGifs(searchText, 0);
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
      /> */}
      <NewSlider tag='trending' title='Trending' />
      <NewSlider tag='random' title='Random' />
      <NewSlider tag='angry' title='Angry' />
      <NewSlider tag='love' title='Love' />
      <NewSlider tag='drunk' title='Drunk' />
    </div>
  );
};

export default App;

