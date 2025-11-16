import React from 'react';
import { Link } from 'react-router-dom';

export default function CodMode() {
  const handleConfirm = () => {
    alert("Order placed! Please pay in cash upon delivery.");
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="text-center border border-warning border-3 rounded p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="fw-bold fs-4 mb-3 reflective-btn-brand">Cash on Delivery</h3>
        <p className="mb-4 text-warning">
          You have chosen to pay in cash when your order is delivered.
        </p>
        <Link
          to="/"
          className="btn btn-warning text-dark w-100 fw-bold reflective-btn"
          onClick={handleConfirm}
        >
          Confirm Cash on Delivery
        </Link>
      </div>
    </div>
  );
}
