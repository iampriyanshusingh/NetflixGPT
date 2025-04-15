import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

import "swiper/swiper-bundle.css";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  useTrailerVideo(movie?.id);
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const trailerKey = trailerVideo?.key;

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">🎬 Movie not found</h2>
          <button
            className="px-6 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-full hover:scale-105 transition-transform shadow-md"
            onClick={() => navigate(-1)}
          >
            ⬅ Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      {/* Content Block */}
      <div className="relative z-10 px-3 md:px-12 pt-12 flex flex-col lg:flex-row items-start gap-6 max-w-7xl mx-auto">
        {/* Poster */}
        <div className="w-[180px] md:w-[200px] flex-shrink-0 rounded-xl shadow-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="rounded-2xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Movie Details */}
        <div className="flex-1 space-y-6">
          {/* Title and Ratings */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white/transparent bg-clip-text">
              {movie.title || movie.name}
            </h1>

            <div className="flex space-x-6 text-xl font-semibold">
              <span className="text-yellow-400">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-teal-200">
                📅 {movie.release_date || "N/A"}
              </span>
            </div>

            {/* Genres Display */}
            <div className="flex flex-wrap gap-2 text-sm text-white/90">
              {movie.genre_ids?.map((id) => (
                <span
                  key={id}
                  className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-md"
                >
                  #{id}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200/90 leading-relaxed mb-6 tracking-wide">
            {movie.overview?.length > 0
              ? movie.overview
              : "No description available. Let your imagination take over 🎬✨"}
          </p>
        </div>
      </div>

      {/* Trailer Section - Separate Div */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-12 mt-10">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
          {trailerKey ? (
            <iframe
              title="Trailer"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&rel=0&controls=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-black/40 text-gray-400 text-lg">
              🚫 No trailer available
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="relative z-10 text-center mt-8 max-w-7xl mx-auto px-3 md:px-12">
        <button
          onClick={() => navigate("/browse")}
          className="inline-block bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-indigo-600 hover:to-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all mb-8"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
