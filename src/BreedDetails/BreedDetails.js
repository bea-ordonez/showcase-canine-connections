import React from 'react';
import './BreedDetails.css';


function BreedDetails({ details }) {
      return(
        <div className='info-card'>
            <p>Name: {details.name}</p>
            <p>Bred for: {details.bred_for}</p>
            <p>Weight: Between {details.weight.imperial}lbs</p>
            <p>Height: Between {details.height.imperial}in</p>
            <p>Life Span: {details.life_span}</p>
            <p>Temperament: {details.temperament}</p>
        </div>
      )
  }
// }

export default BreedDetails;