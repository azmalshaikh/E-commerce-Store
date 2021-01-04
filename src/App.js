import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51I08Q5KVaB1UogzPUHigE5BLwM4F3jq8wVAgTKwpaenncxVRnmPCHH75kI66fSqgOAVMM5XzrfRBXt4JyH9j8e3300ckaOReYd");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // App loads attach this listener login /logout
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if(authUser) {
        // The user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // User is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  }, [])

  return (
    <Router>
      <div className="app">

        {/* Header */}

        <Switch>

          <Route path="/orders">
            <Header />
            <Navbar />
            <Orders />
          </Route>
          
          <Route path="/login"> 
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Navbar />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Default Route is at bottom*/}
          <Route path="/">
            {/* Home */}
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
