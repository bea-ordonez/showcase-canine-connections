import React from 'react';
import './BreedDetails.css';

function BreedDetails({ breed }) {
  console.log('breed', breed)
  return(
    <div>
        <p>{breed.name}</p>
        <p>{breed.description}</p>
        <p>{breed.hypoallergenic}</p>
    </div>
  )
}


export default BreedDetails;