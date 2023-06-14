import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ stars }) => {
  return (
    <div className="rating">
      {[...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map((index) => (
        <div className="star" key={index}></div>
      ))}
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Rating;
