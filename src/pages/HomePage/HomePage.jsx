import { useEffect, useState } from 'react';
import { fetchingTrendingList } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import Section from '../../components/utils/Section/Section';
import Container from '../../components/utils/Container/Container';
import Loader from '../../components/Loader/Loader';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const HomePage = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetchingTrendingList();

        setMovies(response.results);
        if (!(response.results.length > 0)) {
          setError('Oh no, there are no movies for this search query');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          {error ? (
            <ErrorMsg>{error}</ErrorMsg>
          ) : (
            movies.length > 0 &&
            !isLoading && <MovieList movies={movies} genres={genres} />
          )}
          {isLoading && <Loader backdrop />}
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
