import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Media/img1.jpg'
import img2 from '../Media/img2.jpg'
import img3 from '../Media/img3.jpg'
export default function Home() {

  return (
    <div>
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
        <Link className='nav-link fs-5' to="/Menu">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </div>
        </Link>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  )
}
