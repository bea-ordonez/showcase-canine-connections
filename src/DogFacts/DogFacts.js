import React from 'react';
import './DogFacts.css';

function DogFacts({ facts, errorCode }) {
    // if(!facts) {
    //     return (
    //       <div>
    //         <p>Error Code: {errorCode}</p>
    //         <p>No dog facts found.</p>
    //       </div>
    //     );
    // } else {
        return (
          <div className="dog-facts">
            {facts.map((fact, index) => (
              <div key={index}>
                <p className="did-you-know">Did you know?</p>
                <p>{fact.attributes.body}</p>
              </div>
            ))}
          </div>
        );
    }
// }

export default DogFacts;