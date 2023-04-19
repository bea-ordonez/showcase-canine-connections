import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

    return(
      <form>
        <label>
            <input type="text" value={searchTerm} onChange={handleChange} />
        </label>
        <button>Search</button>
      </form>
    )
}

export default Form;