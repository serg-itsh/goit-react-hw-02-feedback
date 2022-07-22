// import React from "react";
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export const FeedbackOptions = ({
  option,
  onHandleClickGood,
  onHandleClickNeutral,
  onHandleClickBad,
}) => {
  return (
    <div className="list">
      <h1>Please leave feedback</h1>
      <div className="list-item">
        <button type="button" className="btn" onClick={onHandleClickGood}>
          Good
        </button>
        <button type="button" className="btn" onClick={onHandleClickNeutral}>
          Neutral
        </button>
        <button type="button" className="btn" onClick={onHandleClickBad}>
          Bad
        </button>
      </div>

      {/* <h1>Statistics</h1>
      <div>
        <p> Good: {option}</p>
        <p> Neutral: {}</p>
        <p> Bad: {}</p>
        
        </div> */}
    </div>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
};
// export default FeedbackList;
