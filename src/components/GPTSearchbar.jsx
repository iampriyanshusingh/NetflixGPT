import React, { useRef } from "react";
import lang from "../utils/langConstant";
import { useSelector } from "react-redux";
import model from "../utils/gemini";

const GPTSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    //making an api call to gemini api and will get the movie result, siuuu!

    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 10 movies, comma seperated like the example result given ahead. Example: Gadar, Sole, Koi Mil Gaya, Golmal";

    const result = await model.generateContent(geminiQuery);
    const movieList = await result.response.text().split(",");
    console.log(movieList);
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  border bg-white border-gray-300 col-span-10 text-black"
          placeholder={lang[langKey].GPTSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-2"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
