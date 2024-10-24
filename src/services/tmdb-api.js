import axios from 'axios';

const baseGetConfig = {
  method: 'get',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    Accept: 'application/json',
  },
};

export async function fetchingTrendingList(currentPage = 1) {
  const config = {
    ...baseGetConfig,
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: {
      page: currentPage,
      language: 'en-US',
    },
  };

  const response = await axios(config);

  return response.data;
}

export async function fetchingMovieListByQuery(query, currentPage = 1) {
  const config = {
    ...baseGetConfig,
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: query,
      page: currentPage,
      language: 'en-US',
    },
  };

  const response = await axios(config);

  return response.data;
}

export const fetchingMovieById = async id => {
  const config = {
    ...baseGetConfig,
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      language: 'en-US',
    },
  };

  const response = await axios(config);

  return response.data;
};

export const fetchingMovieCredits = async id => {
  const config = {
    ...baseGetConfig,
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: {
      language: 'en-US',
    },
  };

  const response = await axios(config);

  return response.data;
};

export const fetchingMovieReviews = async id => {
  const config = {
    ...baseGetConfig,
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: {
      language: 'en-US',
    },
  };

  const response = await axios(config);

  return response.data;
};

export async function fetchingMoviesGenres() {
  const config = {
    ...baseGetConfig,
    url: `https://api.themoviedb.org/3/genre/movie/list`,
  };

  const response = await axios(config);

  return response.data;
}
