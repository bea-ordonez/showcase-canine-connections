import React, { useEffect, useState } from 'react';
import { fetchDogDetails } from '../Apicalls';
import BreedDetails from '../BreedDetails/BreedDetails';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = ({ searchTerm }) => {
    const [fetched, setFetched] = useState(false);
    const [dogDetails, setDogDetails] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
      async function getData() {
        try {
          
          const response = await fetchDogDetails(searchTerm);
          setDogDetails(response);
          setFetched(true);
        } catch (error) {
          setError(error.message);
        }
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
          { dogDetails.length > 0 && dogDetails.map(getBreedInfo) }
          { fetched && dogDetails.length === 0 && !error && <div className='no-matches'>Sorry! There are not matching results.</div> }
          { error && <div>{error}</div> }

        {/*error ? <div>Something went wrong: {error}</div> : dogDetails.map(getBreedInfo)*/}
        {/* {error && <div>Error: {error}</div>} */}
      </>
    )
}

export default DetailsPage;