import React from 'react';
import './DogFacts.css';

function DogFacts({ fact }) {
  console.log(fact)
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