import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const [isGPTSearch, setGPTSearch] = useState(true);
  const handleGPTSearchClick = () => {
    //toggling here babes
    setGPTSearch(!isGPTSearch);
    dispatch(toggleGPTSearchView());
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={NETFLIX_LOGO} alt="Netflix_logo" className="w-44" />
      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-2 m-2 bg-gradient-to-r from-sky-600 to-purple-600 rounded-md cursor-pointer text-white "
            onClick={handleGPTSearchClick}
          >
            {isGPTSearch ? "GPT Search" : "Home Page"}
          </button>
          <img src={USER_ICON} alt="userIcon" className="w-15 h-15 p-2 " />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
