import css from './MovieCard.module.css';
import { HiStar } from 'react-icons/hi2';

const MovieCard = ({
  id,
  title,
  original_title,
  poster_path,
  vote_average,
  overview,
  runtime,
  release_date,
  className,
}) => {
  return (
    <>
      {id && (
        <div className={`${css.movieCard} ${className}`}>
          <div className={css.imgThumb}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://placehold.co/500/051F50/FFF?text=${title}`
              }
              alt={original_title}
            />
          </div>
          <div className={css.movieDescr}>
            <p>
              <HiStar size={'2rem'} color={'gold'} />
              {Number(vote_average).toFixed(1)} / 10
            </p>
            <h2>{title}</h2>

            <p>Release Date: {release_date.slice(0, 4)}</p>
            <p>Runtime: {runtime} min</p>
            <p>{overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
