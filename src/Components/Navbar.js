import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg border-warning border-2 py-auto border-bottom  mousehover '>
        <div className=" navbar-brand mx-4 py-1 reflective-btn-brand">
          <Link className='nav-link fw-bold fs-2 ' to="/">No.1 Restaurant</Link>
        </div>
        <ul className='navbar-nav'>
          <li className='nav-item mx-2 mt-2 '>
            <Link className='nav-link fs-5 ' to="/">Home</Link>
          </li>
          <li className='nav-item mx-2 mt-2 '>
            <Link className='nav-link fs-5' to="/Menu">Menu</Link>
          </li>
          <li className='nav-item mx-2 mt-2 '>
            <Link className='nav-link fs-5' to="/Contact">Contact</Link>
          </li>
        </ul>
               </nav>
    </>
  )
}
