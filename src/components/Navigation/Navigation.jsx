import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const getLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <div>
      <nav className={css.navBox}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
