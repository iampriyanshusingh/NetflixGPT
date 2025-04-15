import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANG, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/langConstant";

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={NETFLIX_LOGO} alt="Netflix_logo" className="w-44" />
      {user && (
        <div className="flex p-2">
          <select
            className="p-2 bg-gradient-to-r from-yellow-500 to-teal-500 shadow-[0_4px_20px_rgba(255,206,84,0.4)] backdrop-blur-md text-white m-2 rounded-lg bg-black/50 font-semibold cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.indentifier} value={lang.indentifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-2 m-2 bg-gradient-to-r from-sky-600 to-purple-600 shadow-[0_0_12px_rgba(72,191,255,0.3),0_0_25px_rgba(168,85,247,0.25)] rounded-md backdrop-blur-md cursor-pointer text-white "
            onClick={handleGPTSearchClick}
          >
            {isGPTSearch ? lang[langKey].GPTSearch : lang[langKey].homePage}
          </button>
          <img src={USER_ICON} alt="userIcon" className="w-15 h-15 p-2 " />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
