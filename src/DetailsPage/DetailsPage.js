import React, { useEffect, useState } from 'react';
import { fetchDogDetails } from '../Apicalls';
import BreedDetails from '../BreedDetails/BreedDetails';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <button>Go Back</button>
          </Link>
        {dogDetails.map(getBreedInfo)}
      </>
    )
}

export default DetailsPage;