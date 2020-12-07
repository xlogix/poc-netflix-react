import axios from 'axios';

const TRENDING_URL = 'http://api.giphy.com/v1/gifs/';
const URL = 'http://api.giphy.com/v1/gifs/search?q=';
const KEY = 'KxVIgO29rrHrqCAkQSzCfCOxyM9eDMOj';

export const fetchRandomGifs = async (name, offset) => {
  const { data } = await axios.get(URL + 'random', {
    params: {
      tag: name,
      api_key: KEY,
      offset: offset
    }
  });

  return data;
};

export const fetchTrendingGifs = async (limit, offset) => {
  const { data } = await axios.get(TRENDING_URL + 'trending', {
    params: {
      limit: limit,
      offset: offset,
      api_key: KEY
    }
  });

  return data
};

export const fetchAngryGifs = async (limit, offset) => {
  const { data } = await axios.get(URL + 'angry', {
    params: {
      limit: limit,
      offset: offset,
      api_key: KEY
    }
  });

  return data
};

export const fetchLoveGifs = async (limit, offset) => {
  const { data } = await axios.get(URL + 'love', {
    params: {
      limit: limit,
      offset: offset,
      api_key: KEY
    }
  });

  return data
};

export const fetchBoredGifs = async (limit, offset) => {
  const { data } = await axios.get(URL + 'bored', {
    params: {
      limit: limit,
      offset: offset,
      api_key: KEY
    }
  });

  return data
};

export const fetchDrunkGifs = async (limit, offset) => {
  const { data } = await axios.get(URL + 'drunk', {
    params: {
      limit: limit,
      offset: offset,
      api_key: KEY
    }
  });

  return data
};