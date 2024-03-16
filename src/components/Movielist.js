import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-xl font-medium py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
