/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useEffect } from "react";
import Movie from "./Movie";

const MoviesCards = ({ movies, bookings, setBookings, setMovies }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
        params: {
          country: "us",
          show_type: "movie",
          series_granularity: "show",
          order_by: "original_title",
          output_language: "en",
          order_direction: "asc",
          genres_relation: "and",
        },
        headers: {
          "X-RapidAPI-Key":
            "410e5a317fmsha2215c4a3a17ccfp191a40jsncea9de47314f",
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log('Fetched')
        setMovies(response.data?.shows);
      } catch (error) {
        console.error(error);
      }
    };
    movies?.length > 0 ? null : fetchMovies();
  }, [setMovies, movies]);
  return (
    <div className="card-group p-3 align-items-center justify-content-center">
      {movies?.map((key, index) => (
        <Movie key={index} movie={key} bookings={bookings} setBookings={setBookings} />
      ))}
    </div>
  );
};

export default MoviesCards;
