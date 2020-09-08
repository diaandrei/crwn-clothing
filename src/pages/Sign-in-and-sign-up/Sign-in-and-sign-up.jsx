import React from "react";

import SignIn from "../../components/Sign-in/Sign-in";
import SignUp from "../../components/Sign-up/Sign-up";

import "./Sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
