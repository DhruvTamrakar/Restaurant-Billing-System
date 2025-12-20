import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function PaymentSection() {
  const { MenuName } = useParams();
  const PaymentModes = ["UPI Pay", "QR Scanner", "Cash on Delivery"];

  return (
    <div className="container my-3 d-flex justify-content-center " style={{minHeight: "50vh"}}>
      <div className="row g-3 col-12">
        <div className="col-12 col-md-4">
          <div className="border border-warning rounded p-2 h-100">
            <div className="fw-bold border-bottom border-warning border-2 mb-2 pb-1 text-center text-warning">
              Payment Mode
            </div>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {PaymentModes.map((mode, index) => (
                <li key={index}>
                  <Link to={`/Menu/${MenuName}/Payment/${mode}`} className="text-decoration-none">
                    <div className="border border-3 rounded container-sm text-warning text-center fw-bold py-2 reflective-btn">
                      {mode}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="border border-warning rounded p-2 h-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
