//rafce, react arrow function component export

import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    //Sign / Sign Up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          className="bg-cover w-screen h-screen"
        />
      </div>

      <div className="absolute w-3/12 mx-auto left-0 right-0 p-12 my-32 rounded-lg bg-black/80">
        <form
          className=" relative text-white rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4  bg-gray-700 w-full rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4  bg-gray-700 w-full rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4  bg-gray-700 w-full rounded-lg"
          />
          <p className="text-red-500 text-lg font-bold">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg
        "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a member? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
