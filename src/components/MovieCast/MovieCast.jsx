import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { fetchingMovieCredits } from '../../services/tmdb-api';
import Loader from '../Loader/Loader';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetchingMovieCredits(movieId);

        setCast(response.cast);

        if (!(response.cast.length > 0)) {
          setError(
            'Sorry, we don`t know who is in the cast for this movie...('
          );
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {error ? (
        <ErrorMsg> {error} </ErrorMsg>
      ) : (
        cast.length > 0 && (
          <ul className={css.movieCastList}>
            {cast.map(({ name, character, profile_path, order }, index) => {
              if (index > 15) return;

              return (
                <li className={css.movieCastItem} key={order}>
                  <div className={css.imageThumb}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500${profile_path}`
                          : `https://placehold.co/500/051F50/FFF?text=${name}`
                      }
                      alt={name}
                    />
                  </div>

                  <div className={css.movieCastItemDescr}>
                    <span>{name}</span>
                    <hr />
                    <span>{character}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )
      )}
    </>
  );
};

export default MovieCast;
