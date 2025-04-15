import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  if (!posterPath) return null; // ⛔ skip rendering if poster is missing

  return (
    <div
      className="w-36 sm:w-40 md:w-48 lg:w-52 xl:w-56 pr-4 group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={IMG_CDN + posterPath}
          alt={movie.title || movie.name}
          className="w-full h-auto object-cover rounded-xl group-hover:brightness-75 transition duration-300"
          loading="lazy"
        />

        {/* Optional title overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs md:text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {movie.title || movie.name}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
