import React from 'react';
import PropTypes from 'prop-types';
import './DogFacts.css';

function DogFacts({ fact }) {
  return (
    <div className="dog-facts">
        <div>
          <p className="did-you-know">Did you know?</p>
          <p>{fact}</p>
        </div>
    </div>
  );
}

export default DogFacts;

DogFacts.propTypes = {
  fact: PropTypes.string.isRequired
};