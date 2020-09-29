import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import SignIn from './SignIn';

function App() {
  return (
    //BEM convention

    <Router>
      
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout />
        </Route>

        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/">
          <Header/>
          <Home /> 
        </Route>

      </Switch>
      
    </Router>
  );
}

export default App;
