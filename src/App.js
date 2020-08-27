import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/Sign-in-and-sign-up/Sign-in-and-sign-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
