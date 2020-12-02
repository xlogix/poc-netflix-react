import axios from 'axios';

const URL = 'http://api.giphy.com/v1/gifs/';
const KEY = 'KxVIgO29rrHrqCAkQSzCfCOxyM9eDMOj';

export const fetchRandomGif = async (name) => {
  const { data } = await axios.get(URL + 'random', {
    params: {
      tag: name,
      api_key: KEY
    }
   });

  return data;
};

export const fetchTrendingGifs = async () => {
  const { data } = await axios.get(URL + 'trending', {
    params: {
      limit: 5,
      api_key: KEY
    }
  });

  return data
};

export const fetchAngryGifs = async () => {
  const { data } = await axios.get(URL + 'angry', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};

export const fetchLoveGifs = async () => {
  const { data } = await axios.get(URL + 'love', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};

export const fetchBoredGifs = async () => {
  const { data } = await axios.get(URL + 'bored', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};

export const fetchDrunkGifs = async () => {
  const { data } = await axios.get(URL + 'drunk', {
    params: {
      limit: 4,
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