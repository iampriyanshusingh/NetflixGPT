import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //custom hook of playing movies
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container 
          - VideoBackground
          - VideoTitle
        Secondary Container
          - MovieList * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;
