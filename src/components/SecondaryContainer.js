import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  let movies = useSelector((store) => store.movies);
  return (
    // MovieList - Popular
    //   MovieCards * n
    // MovieList - Now Playing
    // MovieList - Trending
    // MovieList - Horror

    <div className="bg-black">
      <div className="-mt-48 pl-12 relative z-20">
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
