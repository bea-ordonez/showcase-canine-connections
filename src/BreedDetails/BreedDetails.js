import React from 'react';
import './BreedDetails.css';


function BreedDetails({ details }) {
  console.log('details', details)
  return(
    <div>
        <p>{details.name}</p>
        <p>{details.bred_for}</p>
    </div>
  )
}

export default BreedDetails;