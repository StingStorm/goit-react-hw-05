import axios from 'axios';

export async function fetchingTrendingList(currentPage = 1) {
  const getConfig = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      Accept: 'application/json',
    },
    params: {
      page: currentPage,
      language: 'en-US',
    },
  };

  const response = await axios(getConfig);

  return response.data;
}
