import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { fetchDogDetails, fetchDogFacts } from '../Apicalls'; 
import { Header } from '../Header/Header'; 
import './App.css';

function App() {
  const [dogDetails, setDogDetails] = useState([]);
  const [dogFacts, setDogFacts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetchDogDetails();
      console.log(response)
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

  useEffect(() => {
    async function getData() {
      const response = await fetchDogFacts();
      console.log(response)
      setDogFacts(response.data)
    }
    getData();
  }, [])


  
return (
  <main className='App'> 
    <Header />
    {/* <h2>Name: {renderData()}</h2> */}
  </main>
)}

export default App;
