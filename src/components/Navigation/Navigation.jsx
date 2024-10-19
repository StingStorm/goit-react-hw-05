import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </>
  );
};

export default Navigation;
