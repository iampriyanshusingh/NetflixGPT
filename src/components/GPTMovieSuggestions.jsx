import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]?.results}
          />
        ))}
      </div>
      <div>
        {/* {movieNames.map((movieName, index) => {
          console.log("Rendering MovieList for:", movieName);
          console.log("Movies for this name:", movieResults[index]);
        })} */}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
