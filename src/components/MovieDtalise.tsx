/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetalise = () => {
  const [movieDetalise, setMovieDetalise]: any = useState([]);
  const param = useParams();
  const movieId = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=3f3e5886f40d5703be130202e6219224&language=en-US`
    );
    setMovieDetalise(res.data);
    console.log(movieDetalise);
  };
  useEffect(() => {
    movieId();
  }, []);

  return (
    <div className="flex flex-col items-center border-x-2 border-b-2 w-[90%] my-28 mx-auto ">
      <div className="flex justify-evenly gap-4 md:gap-0 items-center md:flex-row flex-col-reverse py-4 bg-zinc-200 w-3/4 mx-auto rounded-lg">
        <div className="flex flex-col items-center gap-4 px-8 ">
          <p>
            Film namee :{" "}
            <span className="font-bold">{movieDetalise.title}</span>{" "}
          </p>
          <p>
            Film date :{" "}
            <span className="font-bold">{movieDetalise.release_date}</span>{" "}
          </p>
          <p>vote count : </p>
          <p>vote average :</p>
        </div>
        <div>
          <img
            src={
              "https://image.tmdb.org/t/p/w500/" + movieDetalise.backdrop_path
            }
            width={"300px"}
            className="rounded-lg"
          />
        </div>
      </div>

      <p className="bg-zinc-200 w-3/4 rounded-lg mx-auto font-bold p-5 mt-4">
        {" "}
        Movie summary
        <h1 className="font-normal mt-3 w-full">
          {" "}
          {movieDetalise.overview}
        </h1>{" "}
      </p>

      <Link
        className="bg-zinc-300 px-4 py-2 rounded-md font-bold mt-8 mb-16 hover:translate-y-1 hover:bg-zinc-500 hover:text-slate-300 transition duration-200"
        to="/"
      >
        <button>Go back</button>
      </Link>
    </div>
  );
};
export default MovieDetalise;
