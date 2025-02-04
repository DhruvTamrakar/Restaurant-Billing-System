import React from 'react'
import { Link } from 'react-router-dom';

export default function CodMode() {
    const handleConfirm = () => {
        alert("Order placed! Please pay in cash upon delivery.");

      };
    
  return (
    <div>
      <div className="container text-center ">
      <div className='fw-bold fs-4 mt-3'>Cash on Delivery</div>
      <p className=''>You have chosen to pay in cash when your order is delivered.</p>
      <button className="btn btn-warning reflective-btn rounded mx-auto " onClick={handleConfirm}>
        <Link className='nav-link fs-5' to="/">Confirm Cash on Delivery</Link>
      </button>
    </div>
    </div>
  )
}

