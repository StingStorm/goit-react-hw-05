import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/AppHeader/AppHeader';
import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import { fetchingMoviesGenres } from './services/tmdb-api';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);

function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetchingMoviesGenres();

        setGenres(response.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getGenres();
  }, []);
  return (
    <>
      <Header />
      <Navigation />

      <Suspense fallback={<Loader backdrop />}>
        <Routes>
          <Route path="/" element={<HomePage genres={genres} />} />
          <Route path="/movies" element={<MoviesPage genres={genres} />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
