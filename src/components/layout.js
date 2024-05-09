import React from 'react'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './layout.css'
import NavBar from './navbar/NavBar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout