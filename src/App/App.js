import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { fetchDogFacts } from '../Apicalls'; 
import { Header } from '../Header/Header'; 
import DogFacts from '../DogFacts/DogFacts';
import Form from '../Form/Form'
import './App.css';
import BreedDetails from '../BreedDetails/BreedDetails';
import DetailsPage from '../DetailsPage/DetailsPage';
import MainPage from '../MainPage/MainPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  //
  
  
/*
  
*/
  // function renderData() {
  //   return dogDetails.map(obj =>
  //     <div>
  //       <h2>{obj.attributes.name}</h2>
  //     </div>
  //   )
  // }

  

return (
  <main className='App'> 
    <Switch> 
      <Route path="/details/:search" component={({match}) => <DetailsPage searchTerm={match.params.search} />} />
      <Route path="/" component={() => <MainPage />} />
       
    </Switch> 
    
    
    
    {/* <h2>Name: {renderData()}</h2> */}
  </main>
  
)}

export default App;
