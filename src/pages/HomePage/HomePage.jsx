import { useEffect, useState } from 'react';
import { fetchingTrendingList } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import Section from '../../components/utils/Section/Section';

const HomePage = ({ genres }) => {
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

  return (
    <main>
      <Section>
        <MovieList movies={movies} genres={genres} />
      </Section>
    </main>
  );
};

export default HomePage;
