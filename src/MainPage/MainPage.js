import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header'; 
import DogFacts from '../DogFacts/DogFacts';
import Form from '../Form/Form';
import { fetchDogFacts } from '../Apicalls'; 

const MainPage = () => {
  const [dogFacts, setDogFacts] = useState("Loading...");

  useEffect(() => {    
    fetchDogFacts().then(response => {
      setDogFacts(response);
    });
  }, []);

  return (
    <>
      <Header />
      <DogFacts fact={dogFacts} />
      <Form />
    </>
  )
}

export default MainPage;