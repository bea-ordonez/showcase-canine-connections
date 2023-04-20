import React from 'react';
import './DogFacts.css';

function DogFacts({ facts }) {
    if(!facts) {
        return null;
    } else {
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
}

export default DogFacts;