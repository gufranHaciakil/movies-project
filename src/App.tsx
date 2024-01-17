import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetalise from "./components/MovieDtalise";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const resFunc = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3f3e5886f40d5703be130202e6219224&language=en-US&page=1`
    );
    setMoviesData(res.data.results);
  };
  const setPageNum = async (pageNumber: any) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3f3e5886f40d5703be130202e6219224&language=en-US&page=${pageNumber}`
    );
    setMoviesData(res.data.results);
  };

  // Serch

  const search = async (word: string) => {
    if (word === "") {
      resFunc();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3f3e5886f40d5703be130202e6219224&query=${word}&language=en`
      );
      setMoviesData(res.data.results);
    }
  };

  useEffect(() => {
    resFunc();
  }, []);

  return (
    <div className="App">
      <Header search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieCard moviesData={moviesData} setPageNum={setPageNum} />
            }
          />
          <Route path="/movi/:id" element={<MovieDetalise />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
