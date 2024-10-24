import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { transformReviewsTime } from '../../helpers/time';
import { useEffect, useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { fetchingMovieReviews } from '../../services/tmdb-api';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetchingMovieReviews(movieId);

        setReviews(response.results);

        if (!(response.results.length > 0)) {
          setError('Sorry, there are no reviews for this movie...');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  const toggleReviewExpand = reviewId => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };
  return (
    <>
      {error ? (
        <ErrorMsg>{error}</ErrorMsg>
      ) : (
        reviews.length > 0 && (
          <ul className={css.reviewsList}>
            {reviews.map(
              ({ id, author_details, content, created_at }, index) => {
                if (index > 12) return;
                const isExpanded = expandedReviews[id] || false;
                return (
                  <li key={id} className={css.reviewsListItem}>
                    <div className={css.reviewAuthorDescr}>
                      <div className={css.avatarThumb}>
                        <img
                          src={
                            author_details.avatar_path
                              ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
                              : `https://placehold.co/100/051F50/FFF?text=User`
                          }
                          alt={author_details.name}
                        />
                      </div>
                      <div className="infoThumb">
                        <h3>
                          {author_details.name
                            ? author_details.name
                            : author_details.username}
                        </h3>
                        <p>{transformReviewsTime(created_at)}</p>
                      </div>
                    </div>
                    <hr />
                    <p>
                      {isExpanded || content.length < 450
                        ? content
                        : `${content.slice(0, 450)}...`}
                    </p>
                    {content.length > 450 && (
                      <button
                        type="button"
                        className={css.readMoreBtn}
                        onClick={() => toggleReviewExpand(id)}
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </li>
                );
              }
            )}
          </ul>
        )
      )}
    </>
  );
};

export default MovieReviews;
