import { Link } from 'react-router-dom';
import Grid from '../utils/Grid/Grid';
import GridItem from '../utils/GridItem/GridItem';
import { transformGenresIds } from '../../helpers/transformGenresIds';
import css from './MovieList.module.css';

const MovieList = ({ movies, genres }) => {
  console.log(movies);
  return (
    <Grid>
      {movies.map(movie => {
        return (
          <GridItem className={css.listItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path ?? '/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
                }`}
                alt={movie.title}
              />
            </Link>
            <div className={css.movieOverlay}>
              <h3>{movie.title}</h3>
              <p>
                {genres &&
                  transformGenresIds(genres, movie.genre_ids).join(', ')}
              </p>
            </div>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MovieList;
