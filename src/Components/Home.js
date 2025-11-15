import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Media/img1.jpg';
import img2 from '../Media/img2.jpg';
import img3 from '../Media/img3.jpg';

export default function Home() {
  return (
    <div className="container my-3">
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
    </div>
  );
}
