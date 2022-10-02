import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../Axios/axios";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const responce = await axios.get(fetchUrl);
      if (responce.status !== 200) {
        return;
      }
      setMovies(responce.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  console.log(title, movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="mainPosters__row">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie?.id}
                src={`${baseURL}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
