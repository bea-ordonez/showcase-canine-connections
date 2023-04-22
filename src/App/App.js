import React from 'react';
import './App.css';
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
