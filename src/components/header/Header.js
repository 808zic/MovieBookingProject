import React from "react";

const Header = () => {
  return (
    <header>
      <img
        src="/illustrations/1.svg"
        alt="movie-night"
        height="200"
        style={{ width: "100%" }}
      />
      <div className="d-flex justify-content-center align-items-center p-2 text-center" style={{ flexDirection: 'column' }}>
        <h1 style={{ fontWeight: "700" }}>Welcome to Moargan Movies</h1>
        <p style={{ width: '400px' }}>
          A safe haven where you can book a ticket to any movie of your liking
          and watch it with your friends and family at our very own cinemma
        </p>
      </div>
      {/* <form class="d-flex flex-wrap justify-content-center p-2" style={{ gap: '5px' }}>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ minWidth: '20rem' }}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </header>
  );
};

export default Header;
