import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { fetchDogDetails, fetchDogFacts } from '../Apicalls'; 
import { Header } from '../Header/Header'; 
import DogFacts from '../DogFacts/DogFacts';
import './App.css';

function App() {
  const [dogDetails, setDogDetails] = useState([]);
  const [dogFacts, setDogFacts] = useState([]);
  

  useEffect(() => {
    async function getData() {
      const response = await fetchDogDetails();
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
      setDogFacts(response.data)
      console.log('factsresponseDATA',response.data)
    }
    getData();
  }, [])

  // function renderFact() {
  //   return dogFacts.map(obj => 
  //     <div>
  //       <p>{obj.attributes.body}</p>
  //     </div>)
  // }
  function renderFact() {
    if (dogFacts.length === 0) {
      return <p>LOADING...</p>
    } else {
      return dogFacts.map((obj, index) => 
        <div key={index}>
          <p>{obj.attributes.body}</p>
        </div>)
    }
  }


  
return (
  <main className='App'> 
    <Header />
    <DogFacts facts={dogFacts}/>
    
    {/* <h2>Name: {renderData()}</h2> */}
  </main>
  
)}

export default App;
