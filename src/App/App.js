import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import fetchDogDetails from '../Apicalls'; 
import './App.css';

function App() {
  const [dogDetails, setDogDetails] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetchDogDetails();
      // console.log(response)
      setDogDetails(response.data);
    }
    getData();
  }, []);

  function renderData() {
    return dogDetails.map(obj =>
      <div>
        <h2>{obj.attributes.name}</h2>
      </div>
    )
  }
    
  

return (
  <> 
    <h2>Name: {renderData()}</h2>
  </>

)

}

export default App;
