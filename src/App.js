import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/Sign-in-and-sign-up/Sign-in-and-sign-up";

import { auth } from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
