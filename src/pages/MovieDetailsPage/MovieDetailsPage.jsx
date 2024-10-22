import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <main>
      <p>MovieDetailsPage - {movieId}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Rewiews</Link>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
