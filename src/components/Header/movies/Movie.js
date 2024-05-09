import React, { useState } from "react";

const Movie = ({ movie, setBookings, bookings }) => {
    const [booked, setBooked] = useState(false);
  return (
    <div className="card m-2" style={{ maxWidth: "250px", minWidth: "250px" }}>
        {console.log(movie)}
      <img
        src={movie.imageSet?.verticalPoster?.w360}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "367px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.genres?.map((key) => key.name)?.join(', ')}</p>
        <p className="card-text">
          <small className="text-muted">
            Released on {movie.releaseYear}
          </small>
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setBooked(true);
            setBookings([...bookings, movie]);
          }}
          disabled={booked}
        >
          {booked ? 'Booked' : 'Book Ticket'}
        </button>
      </div>
    </div>
  );
};

export default Movie;
