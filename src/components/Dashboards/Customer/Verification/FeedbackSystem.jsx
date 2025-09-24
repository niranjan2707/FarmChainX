import React, { useState } from 'react';
import './FeedbackSystem.css';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

const FeedbackSystem = ({ productId, onSubmitFeedback }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a star rating.');
      return;
    }
    onSubmitFeedback({ productId, rating, comment });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="feedback-system-submitted">
        <h3>Thank You!</h3>
        <p>Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="feedback-system widget">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Your Comments (Optional)</label>
          <textarea
            id="comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="How was the quality, freshness, and packaging?"
          ></textarea>
        </div>
        <button type="submit" className="submit-feedback-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackSystem;