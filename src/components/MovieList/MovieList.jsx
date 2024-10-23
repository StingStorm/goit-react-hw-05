import { Link, useLocation } from 'react-router-dom';
import Grid from '../utils/Grid/Grid';
import GridItem from '../utils/GridItem/GridItem';
import { transformGenresIds } from '../../helpers/transformGenresIds';
import css from './MovieList.module.css';
import { HiStar } from 'react-icons/hi2';

const MovieList = ({ movies, genres }) => {
  const location = useLocation();
  return (
    <Grid>
      {movies.map(movie => {
        return (
          <GridItem className={css.listItem} key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : `https://placehold.co/500/051F50/FFF?text=${movie.title}`
                }
                alt={movie.title}
              />
            </Link>
            <div className={css.movieOverlay}>
              <h3>{movie.title}</h3>
              <p>
                <HiStar size={'2rem'} color={'gold'} />
                {Number(movie.vote_average).toFixed(1)} / 10
              </p>
              <p>
                {genres &&
                  transformGenresIds(genres, movie?.genre_ids).join(', ')}
              </p>
            </div>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MovieList;
