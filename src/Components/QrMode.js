import React from "react";
import { Link } from "react-router-dom";
import QRimg from "../Media/Payment.png"

const QrScanner = () => {
  const handleScan = () => {
    alert("QR Code scanned successfully! Proceeding with payment...");
  };

  return (
    <div className="container">
      <h2 className="text-warning reflective-btn-brand">QR Scanner</h2>
      <p className="text-warning">Scan the QR code displayed at the payment counter to complete your payment.</p>
      <div className="border p-2 bg-light text-center">
        <div>
            <img src={QRimg} alt="Something Wrong Please use Different Mode to Payment" width={200} />
        </div>
        <button className="btn btn-dark text-dark reflective-menus m-2 " onClick={handleScan}>
          <Link className='nav-link fs-5 ' to="/">Simulate QR Code Scan</Link>
        </button>
      </div>
    </div>
  );
};

export default QrScanner;
