import css from './Grid.module.css';

const Grid = ({ children }) => {
  return <ul className={css.moviesGrid}>{children}</ul>;
};

export default Grid;
