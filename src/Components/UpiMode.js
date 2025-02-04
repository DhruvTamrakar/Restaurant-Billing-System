import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpiPay = () => {
  const [upiId, setUpiId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment initiated via UPI: ${upiId}`);
  };

  return (
    <div className="container text-center py-3">
      <div className='fw-bold fs-4 mt-2'>UPI Payment</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="upiId" className="form-label ">
            Enter your UPI ID
          </label>
          <input
            type="text"
            id="upiId"
            className="form-control"
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning reflective-btn">
          <Link className='nav-link fs-5' to="/">Pay with UPI</Link>
        </button>
      </form>
    </div>
  );
};

export default UpiPay;
