import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Media/img1.jpg';
import img2 from '../Media/img2.jpg';
import img3 from '../Media/img3.jpg';

export default function Home() {
  return (
    <div className="container-fluid my-3 ">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 rounded" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 rounded" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 rounded" src={img3} alt="Third slide" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center mt-3">
        <Link to="/Menu" className="btn btn-warning fw-bold reflective-btn px-4 py-2">
          View Menu
        </Link>
      </div>
       <footer className="bg-dark text-light mt-5 pt-4 pb-3 rounded ">
      <div className="container-fluid">
        <div className="row text-center text-md-start">
          
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold">Gold Restaurant</h5>
            <p>Serving delicious meals since 2025. Enjoy our wide variety of cuisines, snacks, drinks, and desserts!</p>
          </div>
          
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/Menu" className="text-light text-decoration-none">Menu</Link>
              </li>
              <li>
                <Link to="/Contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
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
  );
}
