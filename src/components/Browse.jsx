import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //custom hook of playing movies
  useNowPlayingMovies();
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
