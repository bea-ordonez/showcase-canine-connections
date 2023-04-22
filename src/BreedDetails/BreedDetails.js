import React from 'react';
import './BreedDetails.css';
import PropTypes from 'prop-types';

function BreedDetails({ details }) {
      return(
        <div className='info-cards-container'>
          <div className='info-card'>
              <p>Name: {details.name}</p>
              <p>Bred for: {details.bred_for}</p>
              <p>Weight: Between {details.weight.imperial}lbs</p>
              <p>Height: Between {details.height.imperial}in</p>
              <p>Life Span: {details.life_span}</p>
              <p>Temperament: {details.temperament}</p>
          </div>
        </div>
      )
  }

export default BreedDetails;

BreedDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bred_for: PropTypes.string.isRequired,
    weight: PropTypes.shape({
      imperial: PropTypes.string.isRequired,
    }).isRequired,
    height: PropTypes.shape({
      imperial: PropTypes.string.isRequired,
    }).isRequired,
    life_span: PropTypes.string.isRequired,
    temperament: PropTypes.string.isRequired,
  }).isRequired,
};