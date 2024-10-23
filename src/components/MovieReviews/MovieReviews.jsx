import { useOutletContext } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { transformReviewsTime } from '../../helpers/time';
import { useState } from 'react';

const MovieReviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const context = useOutletContext();
  if (!context) {
    return;
  }

  const { reviews } = context;

  if (!(reviews.length > 0)) {
    return (
      <div className={css.reviewsList}>
        Sorry, there are no reviews for this movie...
      </div>
    );
  }

  const toggleReviewExpand = reviewId => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };
  return (
    <ul className={css.reviewsList}>
      {reviews.map(({ id, author_details, content, created_at }, index) => {
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
      })}
    </ul>
  );
};

export default MovieReviews;
