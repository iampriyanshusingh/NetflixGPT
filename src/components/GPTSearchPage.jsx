import React from "react";
import GPTSearchbar from "./GPTSearchbar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div className="bg-black/50 h-screen w-full ">
      <div className="fixed -z-10 h-screen">
        <img src={NETFLIX_BG} className="bg-cover" />
      </div>
      <GPTSearchbar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
