import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { fetchDogDetails, fetchDogFacts } from '../Apicalls'; 
import { Header } from '../Header/Header'; 
import DogFacts from '../DogFacts/DogFacts';
import Form from '../Form/Form'
import './App.css';
import BreedDetails from '../BreedDetails/BreedDetails';

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

  // function renderData() {
  //   return dogDetails.map(obj =>
  //     <div>
  //       <h2>{obj.attributes.name}</h2>
  //     </div>
  //   )
  // }

  useEffect(() => {
    async function getData() {
      const response = await fetchDogFacts();
      setDogFacts(response.data)
    }
    getData();
  }, [])

return (
  <main className='App'> 
  <Routes> 
            <Route path="/" component={<><Header />
    <DogFacts facts={dogFacts}/>
    <Form /></> } /> 
            <Route path="/about" component={<About/> } /> 
       </Routes> 
    
    <BreedDetails breed={dogDetails} />
    
    {/* <h2>Name: {renderData()}</h2> */}
  </main>
  
)}

export default App;
