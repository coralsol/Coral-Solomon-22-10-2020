import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import history from './history';
import WeatherContextProvider from './contexts/WeatherContext'

import Home from './pages/Home';
import Favorites from './pages/Favorites'
import NavBar from '../src/components/NavBar'
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter history={history}>
      <WeatherContextProvider>
        <NavBar></NavBar>
        <Switch>
          <Route path="/Coral-Solomon-22-10-2020/favorites" component={Favorites} exact></Route>
          <Route path="/Coral-Solomon-22-10-2020" component={Home} exact></Route>

        </Switch>
      </WeatherContextProvider>
    </BrowserRouter>
  );
}

export default App;
