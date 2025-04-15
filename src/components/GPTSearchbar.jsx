import React, { useRef } from "react";
import lang from "../utils/langConstant";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini";
import { API_NOW_PLAYING } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GPTSearchbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_NOW_PLAYING
    );
    const json = await data.json();
    return json;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    //making an api call to gemini api and will get the movie result, siuuu!

    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example: Gadar, Sole, Koi Mil Gaya, Golmal";

    const result = await model.generateContent(geminiQuery);
    const movieList = await result.response.text().split(",");

    const promiseArray = movieList.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGeminiMovieResult({ movieNames: movieList, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] shadow-[0_0_25px_rgba(146,141,171,0.4)] rounded-lg w-4/5 max-w-4xl grid grid-cols-12 p-2 backdrop-blur-md border border-[#928DAB]/20 transition-all duration-500 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-2 bg-black/70 rounded-xl border-none col-span-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#928DAB] transition-all duration-300"
          placeholder={lang[langKey].GPTSearchPlaceholder}
        />
        <button
          className="m-2 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white rounded-xl col-span-2 font-semibold tracking-wide shadow-lg hover:shadow-[0_0_15px_#ff416c] transition-all duration-300 cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
