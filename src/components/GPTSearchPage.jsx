import React from "react";
import GPTSearchbar from "./GPTSearchbar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div className="">
      <div className="absolute -z-10 h-screen">
        <img src={NETFLIX_BG} className="bg-cover" />
      </div>
      <GPTSearchbar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
