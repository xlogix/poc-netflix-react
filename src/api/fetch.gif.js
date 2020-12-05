import axios from 'axios';

const TRENDING_URL = 'http://api.giphy.com/v1/gifs/';
const URL = 'http://api.giphy.com/v1/gifs/search?q=';
const KEY = 'KxVIgO29rrHrqCAkQSzCfCOxyM9eDMOj';

export const fetchRandomGifs = async (name) => {
  const { data } = await axios.get(URL + 'random', {
    params: {
      tag: name,
      api_key: KEY
    }
  });

  return data;
};

export const fetchTrendingGifs = async () => {
  const { data } = await axios.get(TRENDING_URL + 'trending', {
    params: {
      limit: 25,
      api_key: KEY
    }
  });

  return data
};

export const fetchAngryGifs = async () => {
  const { data } = await axios.get(URL + 'angry', {
    params: {
      limit: 25,
      api_key: KEY
    }
  });

  return data
};

export const fetchLoveGifs = async () => {
  const { data } = await axios.get(URL + 'love', {
    params: {
      limit: 25,
      api_key: KEY
    }
  });

  return data
};

export const fetchBoredGifs = async () => {
  const { data } = await axios.get(URL + 'bored', {
    params: {
      limit: 25,
      api_key: KEY
    }
  });

  return data
};

export const fetchDrunkGifs = async () => {
  const { data } = await axios.get(URL + 'drunk', {
    params: {
      limit: 25,
      api_key: KEY
    }
  });

  return data
};

export const fetchHappyGifs = async () => {
  const { data } = await axios.get(URL + 'happy', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};

export const fetchHungryGifs = async () => {
  const { data } = await axios.get(URL + 'hungry', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};