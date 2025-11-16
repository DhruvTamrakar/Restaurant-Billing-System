import React from 'react';
import img1 from '../Media/img1.jpg';
import img2 from '../Media/img2.jpg';
import img3 from '../Media/img3.jpg';
import drinkimg from '../Media/drinkimg.png';
import breakfastimg from '../Media/breakfastimg.png';
import maindishimg from '../Media/maindishimg.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container-fluid my-3 px-0">
      {/* Carousel */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {[img1, img2, img3].map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img className="d-block w-100 rounded" src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      

      {/* Top Notch Section */}
      <div className="container text-center mb-5 px-3 mt-5">
        <h1 className="display-5 fw-bold text-warning">We Offer Top Notch</h1>
        <p className="mt-3 text-secondary">
          Remember to provide excellent customer service to create a positive reputation, and
          host events or live music nights to make your restaurant stand out.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="row g-4 justify-content-center ">
          {[{
            img: breakfastimg,
            title: 'Breakfast'
          },{
            img: maindishimg,
            title: 'Main Dishes'
          },{
            img: drinkimg,
            title: 'Drinks'
          }].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 text-center ">
              <div className="card border-0 shadow-sm hovereffect h-100 glass-nav">
                <img src={item.img} className="card-img-top rounded rounded-2 p-3" alt={item.title} />
                <div className="card-body ">
                  <h3 className="fw-bold text-warning">{item.title}</h3>
                  <button className="btn border border-warning text-dark  mt-2 fw-semibold reflective-btn">
                     <Link className="nav-link text-dark fs-5 " to="/Menu">View Menu</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
}
