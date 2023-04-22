import React, { useState } from 'react';
import BreedDetails from '../BreedDetails/BreedDetails';
import './Form.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const [breed, setBreed] = useState(null);
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return(
    <div>
      <form>
        <p className="prompt">Find Your Perfect Dog Breed!</p>
        <label>
            <input placeholder="Search Breed Name" type="text" value={searchTerm} onChange={handleChange} />
        </label>
        <Link to={`/details/${searchTerm}`} >
          <button disabled={searchTerm === ''}>Search</button>
        </Link>
      {breed && <BreedDetails breed={breed} />}
      </form>
    </div>
  )
}
  
export default Form;

Form.propTypes = {
  searchTerm: PropTypes.string,
  breed: PropTypes.object
};