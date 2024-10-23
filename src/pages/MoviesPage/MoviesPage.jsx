import { useEffect, useState } from 'react';
import Section from '../../components/utils/Section/Section';
import SearchForm from '../../components/SearchForm/SearchForm';
import { fetchingMovieListByQuery } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import Container from '../../components/utils/Container/Container';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const MoviesPage = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    const getMovies = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetchingMovieListByQuery(query);
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
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <main>
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
          {error ? (
            <ErrorMsg>{error}</ErrorMsg>
          ) : (
            movies.length > 0 &&
            !isLoading && <MovieList movies={movies} genres={genres} />
          )}
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;
