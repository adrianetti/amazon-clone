import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import SignIn from './SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51HY1eHDEhAFtUiM52usPDVFPjpoAVqSO290U6vFYbx38VhSAFQi6nscwdy9ISr8osZHN2dsE6VVdJ6U13c9FyGBK00h6UtCuus");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) 
      {
        dispatch({
          type: 'SET_USER',
          user: authUser,

        })
      }
      else
      {
        dispatch({
          type: 'SET_USER',
          user: null,

        })
      }
    })
  }, [])

  return (
    //BEM convention
    <Router>
      
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>

        <Route path="/orders">
          <Header/>
          <Orders/>
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
