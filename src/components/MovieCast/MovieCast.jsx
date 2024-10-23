import { useOutletContext } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const context = useOutletContext();

  if (!context) return;

  const { cast } = context;

  return (
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
  );
};

export default MovieCast;
