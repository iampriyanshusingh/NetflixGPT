import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLearnMore, setIsLearnMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);
  const toggleLearnMore = () => setIsLearnMore(!isLearnMore);

  const handleButtonClick = () => {
    const enteredName = isSignInForm ? null : name.current?.value;
    const enteredEmail = email.current?.value;
    const enteredPassword = password.current?.value;

    const message = checkValidData(enteredName, enteredEmail, enteredPassword);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed Up:", user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed In:", user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div className="order-1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          className="bg-cover"
        />
      </div>

      <div className=" order-2 absolute w-3/12 mx-auto left-0 right-0 px-12 pt-12 pb-5 my-32 rounded-lg bg-black/80">
        <form
          className="relative text-white rounded-lg"
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
              className="p-4 my-4 bg-black/80 w-full rounded-lg text-white border border-gray-300"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 bg-black/80 w-full rounded-lg text-white border border-gray-300"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 bg-black/80 w-full rounded-lg text-white border border-gray-300"
          />

          <p className="text-red-500 text-lg font-bold">{errorMessage}</p>

          <button
            className="p-3 my-2 bg-red-700 w-full rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center mb-2 mt-2">OR</p>
          <button className="w-full p-3 mt-2 bg-gray-600/80 rounded-lg cursor-pointer">
            Use a sign-in code
          </button>

          <div className="flex items-center gap-2 mt-4 ">
            <input type="checkbox" className="w-4 h-4 " />
            <label>Remember me</label>
          </div>

          <p
            onClick={toggleSignInForm}
            className="cursor-pointer mt-4 text-[#FFFFFFB3] "
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a member? Sign In"}
          </p>

          <p className="mt-4 text-xs text-[#FFFFFF80]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>

          <p
            onClick={toggleLearnMore}
            className="cursor-pointer mt-1.5 text-blue-500 text-xs"
          >
            {isLearnMore ? "Show less" : "Learn more."}
          </p>

          {isLearnMore && (
            <p className="text-xs text-gray-400 mt-1.5">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes. It is not used for personalized
              advertising by Google.
            </p>
          )}
        </form>
      </div>

      <footer className="order-3">
        <div className="bg-[#161616] w-full h-full p-16 text-[#FFFFFFB3]">
          <p className="mb-12">Questions? Call 000-800-919-1743 (Toll-Free)</p>
          <div className="flex justify-between">
            <div className="flex flex-col cursor-pointer">
              <a src="#" className="pb-6 hover:underline">
                Help Centre
              </a>
              <a src="#" className="hover:underline">
                Cookie Preferences
              </a>
            </div>
            <div className="flex flex-col cursor-pointer">
              <a src="#" className="pb-6 hover:underline">
                FAQ
              </a>
              <a src="#" className="hover:underline">
                Corporate Information
              </a>
            </div>
            <div className="flex flex-col cursor-pointer">
              <a src="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
            <div className="flex flex-col cursor-pointer">
              <a src="#" className="hover:underline">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
