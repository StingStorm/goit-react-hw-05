import { useEffect, useState } from 'react';
import Section from '../../components/utils/Section/Section';
import SearchForm from '../../components/SearchForm/SearchForm';
import { fetchingMovieListByQuery } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      if (!query) return;

      try {
        const response = await fetchingMovieListByQuery(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [query]);
  return (
    <main>
      <Section>
        <SearchForm onSubmit={setQuery} />
        {movies.length > 0 && <MovieList movies={movies} genres={genres} />}
      </Section>
    </main>
  );
};

export default MoviesPage;
