import React, { useState } from 'react';
import BreedDetails from '../BreedDetails/BreedDetails';
import './Form.css';

function Form() {
    const [searchTerm, setSearchTerm] = useState('');
    const [breed, setBreed] = useState(null);
  
    const handleChange = (event) => {
        console.log('event',event.target.value)
      setSearchTerm(event.target.value);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`);
      console.log('response', response)
      const data = await response.json();
      console.log('data', data)
      if (data.length > 0) {
        setBreed(data[0]);
      } else {
        setBreed(null);
      }
    }
  
    return(
      <div>
        <form onSubmit={handleSubmit}>
          <p>Find Your Perfect Dog Breed</p>
          <label>
              <input placeholder="Search Breed Name" type="text" value={searchTerm} onChange={handleChange} />
          </label>
          <button>Search</button>
        </form>
        {breed && <BreedDetails breed={breed} />}
      </div>
    )
  }
  
  export default Form;