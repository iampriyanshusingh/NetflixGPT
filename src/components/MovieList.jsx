import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) return null;

  return (
    <div className="px-6 bg-black/80 rounded-lg">
      <h1 className="text-2xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {movies
            .filter((movie) => movie.poster_path) // ✅ only movies with poster
            .map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                posterPath={movie.poster_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
