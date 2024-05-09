// import logo from './logo.svg';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { useState } from 'react';
import Movies from './pages/Movies';
import Bookings from './pages/Bookings';

function App() {
  const [movies, setMovies] = useState([]);
  const [bookings, setBookings] = useState([]);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout movies={movies} setMovies={setMovies} />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} setMovies={setMovies} bookings={bookings} setBookings={setBookings} />} />
          <Route path="/booking" element={<Bookings bookings={bookings} setBookings={setBookings} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
