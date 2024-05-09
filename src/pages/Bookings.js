import React from "react";

const Bookings = ({ setBookings, bookings }) => {
  return (
    <>
      <div className="d-flex w-100">
        <h1 className="m-3" style={{ fontWeight: "700" }}>
          My Bookings
        </h1>
      </div>
      <div className="card-group p-3">
        {bookings?.map((key, index) => (
            <div key={index} className="card me-2" style={{ maxWidth: '250px' }}>
            <img src={key.imageSet?.verticalPoster?.w360} className="card-img-top" alt={key.title} style={{ height: '367px' }} />
            <div className="card-body">
              <h5 className="card-title">{key.title}</h5>
              <p className="card-text">{key.genres?.map((key) => key.name)?.join(', ')}</p>
              <p className="card-text">
                <small className="text-muted">Released on {key.releaseYear}</small>
              </p>
              <button type="button" className="btn btn-success" 
                onClick={() => {
                  const arr = [...bookings]
                  arr.splice(index, 1)
                  setBookings(arr)
                }}>
                Unbook
              </button>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Bookings;
