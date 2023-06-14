import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const SongCard = ({ data }) => {
  return (
    <div className="song-card">
      <img className="st-thumb" src={data.thumb} alt={data.title} />
      <div className="song-title">
       {data.title} by {data.artist}
        
        
      </div>
      <Rating stars={data.rating} />
    </div>
  );
};

SongCard.propTypes = {
  data: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default SongCard;
