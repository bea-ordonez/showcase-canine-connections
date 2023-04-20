import React, { useEffect, useState } from 'react';
import { fetchDogDetails } from '../Apicalls';

const DetailsPage = (props) => {
    const [dogDetails, setDogDetails] = useState([]);

    useEffect(() => {
        async function getData() {
          const response = await fetchDogDetails();
          console.log(response.data);
          setDogDetails(response.data);
        }
        getData();
      }, []);

    return (
        <div>hi, you searched for {props.searchTerm}</div>
    )
}

export default DetailsPage;