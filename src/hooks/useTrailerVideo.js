import { useEffect } from "react";
import { API_NOW_PLAYING } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (!movieId) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_NOW_PLAYING
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
