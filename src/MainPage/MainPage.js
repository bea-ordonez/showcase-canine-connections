import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header'; 
import DogFacts from '../DogFacts/DogFacts';
import Form from '../Form/Form';
import { fetchDogDetails, fetchDogFacts } from '../Apicalls'; 

const MainPage = () => {
    const [dogFacts, setDogFacts] = useState([]);

    useEffect(() => {
        async function getData() {
        const response = await fetchDogFacts();
        setDogFacts(response.data)
        }
        getData();
    }, [])

    return (
        <>
          <Header />
          <DogFacts facts={dogFacts}/>
          <Form />
        </>
    )
}

export default MainPage;