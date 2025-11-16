import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        <footer className="glass-nav text-light mt-5 pt-4 pb-3 rounded">
        <div className="container-fluid px-4">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold reflective-btn-brand">Gold Restaurant</h5>
              <p>
                Serving delicious meals since 2025. Enjoy our wide variety of cuisines, snacks,
                drinks, and desserts!
              </p>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold reflective-btn-brand">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/Menu" className="text-light text-decoration-none">Menu</Link></li>
                <li><Link to="/Contact" className="text-light text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <h5 className="fw-bold reflective-btn-brand">Contact Us</h5>
              <p>Email: goldrestaurant.com</p>
              <p>Phone: +91 9630358017</p>
              <p>Address: Where, You, Want</p>
            </div>
          </div>

          <hr className="border-light" />

          <div className="text-center">
            &copy; {new Date().getFullYear()} Gold Restaurant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
