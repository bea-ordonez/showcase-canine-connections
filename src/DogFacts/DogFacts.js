// import React from 'react';
// import './DogFacts.css';

// function Facts({fact}) {
//   const {body, id} = fact.attributes;
//   return(
//     <div>
//       <p>{body}</p>
//       <p>{id}</p>
//     </div>
    
//   )

// }

// export default Facts; 

import React from 'react';

import './DogFacts.css';

function DogFacts({ facts }) {
    if(!facts) {
        console.log(facts)
        return null;
    } else {
        return (
          <div>
            {facts.map((fact, index) => (
              <div key={index}>
                <p>Did you know?</p>
                <p>{fact.attributes.body}</p>
              </div>
            ))}
          </div>
        );
    }
}

export default DogFacts;