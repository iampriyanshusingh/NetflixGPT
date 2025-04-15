import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

const SecondaryContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-44 pl-12 relative z-20">
        <MovieList
          title={lang[langKey].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[langKey].topRated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={lang[langKey].upcoming}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={lang[langKey].popular}
          movies={movies.popularMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
