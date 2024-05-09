import React, { useState } from "react";
import MoviesCards from "../components/movies/MoviesCards";
import MovieForm from "../components/movies/MovieForm";
import { Button } from "react-bootstrap";

function Movies({ movies, setMovies, setBookings, bookings }) {
  const [showForm, setShowForm] = useState(false)
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <>
      <div className="d-flex w-100">
      <h1 className="m-3" style={{ fontWeight: "700" }}>
        Movies
      </h1>
      <Button className={`${showForm ? 'btn-danger' : 'green-bg'} m-3`} type="button" onClick={() => setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Add Movie'}</Button>
      </div>
      {showForm ? <MovieForm onAddMovie={addMovie} setShowForm={setShowForm} /> : null}
      <MoviesCards movies={movies} setMovies={setMovies} setBookings={setBookings} bookings={bookings} />
    </>
  );
}

export default Movies;
