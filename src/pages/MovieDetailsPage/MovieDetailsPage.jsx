import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchingMovieById } from '../../services/tmdb-api';
import MovieCard from '../../components/MovieCard/MovieCard';
import Section from '../../components/utils/Section/Section';
import Container from '../../components/utils/Container/Container';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackPath = useRef(location.state || `/movies`);

  const getLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetchingMovieById(movieId);

        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Section>
        <Container className={css.movieDetailsContainer}>
          <Link to={goBackPath.current} className={css.goBackBtn}>
            <span>&#8592;</span> Go Back
          </Link>
          {movie && <MovieCard className="box" {...movie} />}
          <div className="box">
            <nav className={css.movieDetailsNav}>
              <NavLink to="cast" className={getLinkClass}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={getLinkClass}>
                Rewiews
              </NavLink>
            </nav>
            <Outlet />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetailsPage;
