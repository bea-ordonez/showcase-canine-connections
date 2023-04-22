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
return (
  <main className='App'> 
    <Switch> 
      <Route path="/details/:searchTerm" component={({match}) => <DetailsPage searchTerm={match.params.searchTerm} />} />
      <Route path="/" component={() => <MainPage />} />
    </Switch> 
  </main>
)}

export default App;
