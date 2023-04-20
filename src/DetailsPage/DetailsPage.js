import React, { useEffect, useState } from 'react';
import { fetchDogDetails } from '../Apicalls';
import BreedDetails from '../BreedDetails/BreedDetails';
import { Header } from '../Header/Header';

const DetailsPage = ({ searchTerm }) => {
    const [dogDetails, setDogDetails] = useState([]);

    useEffect(() => {
        async function getData() {
          const response = await fetchDogDetails(searchTerm);
          setDogDetails(response);
        }
        getData();
      
      }, []);

   function getBreedInfo(info) {
     return(
      <BreedDetails details={info} />
     )
   } 

    return (
      <>
       <Header />
        {dogDetails.map(getBreedInfo)}
        
      </>
        // <div>hi, you searched for {props.searchTerm}</div>
        // <BreedDetails details={dogDetails}/>

    )
}

export default DetailsPage;