import css from './Grid.module.css';

const Grid = ({ children, className }) => {
  return <ul className={`${css.moviesGrid} ${className}`}>{children}</ul>;
};

export default Grid;
