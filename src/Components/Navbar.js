import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  border-bottom border-warning border-2 py-2 mousehover">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-2 reflective-btn-brand mx-lg-5" to="/">
          Gold Restaurant
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse mx-lg-5 text-center" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link fs-5" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fs-5" to="/Menu">Menu</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fs-5" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
