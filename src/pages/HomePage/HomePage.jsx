import { useEffect, useState } from 'react';
import { fetchingTrendingList } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchingTrendingList();

        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  console.log(movies);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;
