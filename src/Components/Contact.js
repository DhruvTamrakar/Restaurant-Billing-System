import React from 'react';

export default function Contact() {
  return (
    <div className="container  my-4 text-light">
      <form className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="border border-warning border-3 rounded-4 p-4 shadow-sm">
          <h2 className="text-center mb-4 fw-bold reflective-btn text-warning">Contact Us</h2>

         
          <div className="mb-3">
            <label htmlFor="Name" className="form-label fs-5">Name</label>
            <input
              type="text"
              className="form-control border-warning"
              id="Name"
              placeholder="Enter Your Full Name"
            />
          </div>

         
          <div className="mb-3">
            <label htmlFor="Gmail" className="form-label fs-5">Email</label>
            <input
              type="email"
              className="form-control border-warning"
              id="Gmail"
              placeholder="Enter Your Email"
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="Details" className="form-label fs-5">Message</label>
            <textarea
              className="form-control border-warning"
              id="Details"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold reflective-btn text-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
