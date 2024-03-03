import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetch trailer video and update the store with trailer data
  
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
  
      const trailer =
        json.results.find((video) => video.type === "Trailer") ?? json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useMovieTrailer