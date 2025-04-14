import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  //custom hook of playing movies
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
