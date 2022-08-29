import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home">  <Home />    </Route>
      <Route path="/:word">  <Page />    </Route>
      <Route path="/:word/:color/:colorl">  <Page />  </Route>
    </Switch>
    </BrowserRouter>

  
  );
}

export default App;
