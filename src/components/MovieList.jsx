import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) return null;

  return (
    <div className="px-6 bg-black/80">
      <h1 className="text-2xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
