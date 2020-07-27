import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import { Switch, Route } from 'react-router-dom'
import Edit from './Components/Edit';
import Add from './Components/Add';

function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route exact path="/" component={Display} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/add" component={Add} />
    </Switch>
     
    </React.Fragment>
  );
}

export default App;
