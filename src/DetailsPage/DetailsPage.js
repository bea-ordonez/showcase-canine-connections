import React, { useEffect, useState } from 'react';
import { fetchDogDetails } from '../Apicalls';
import BreedDetails from '../BreedDetails/BreedDetails';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DetailsPage.css';

const DetailsPage = ({ searchTerm }) => {
    const [fetched, setFetched] = useState(false);
    const [dogDetails, setDogDetails] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      async function getData() {
        try {
          // throw new Error('shiiiit')
          const response = await fetchDogDetails(searchTerm);
          setDogDetails(response);
          setFetched(true);
        } catch (error) {
          setError('An internal server error has occurred.');
        }
      }
      getData();
    }, [searchTerm]);

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

DetailsPage.propTypes = {
  searchTerm: PropTypes.string.isRequired
};