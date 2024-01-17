import { Link } from "react-router-dom";
import PaginationComp from "./paganation";

const MovieCard = ({
  moviesData,
  setPageNum,
}: {
  moviesData: any;
  setPageNum: any;
}) => {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 mt-28">
        {moviesData.map((item: any, index: Number) => {
          return (
            <div className="w-56 md:w-[19rem] md:h-[12rem] h-fit  mb-4 md:mb-0">
              <Link to={`/movi/${item.id}`} className="group w-full relative">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
                  alt="nooo"
                  className="w-[20rem]"
                />
                <div className="opacity-0 transition ease-in hover:opacity-100 leading-9 absolute top-0 right-0 bottom-0 left-0 md:w-[18.9rem] bg-[#00000082] text-slate-200 h-fit md:h-[12.5rem] py-1 px-2 duration-300">
                  <h1>
                    {" "}
                    film name : <span className="font-bold">
                      {item.title}
                    </span>{" "}
                  </h1>
                  <h1>film date : {item.release_date}</h1>
                  <h1>vote_count : {item.vote_count}</h1>
                  <h1>vote_average :{item.vote_average}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <PaginationComp setPageNum={setPageNum} />
    </div>
  );
};

export default MovieCard;
