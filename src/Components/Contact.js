import React from 'react'

export default function Contact() {
    return (
        <div>
            <form >
                <div className='col-5 container border text-center border-warning border-3 mt-3 rounded'>
                    <div>
                        <label htmlFor="Name" className="form-label fs-5 px-3 mt-3 d-flex">Name </label>
                        <input type="text" className="form-control border-warning" id="Name" placeholder='Enter Your Full Name' />
                    </div>
                    <div>
                        <label htmlFor="Gmail" className="form-label fs-5 px-3 mt-3 d-flex">Gmail </label>
                        <input type="text" className="form-control border-warning" id="Gmail" placeholder='Enter Your Gmail' />
                    </div>
                    <div>
                        <textarea className='col-12 rounded mt-4 px-2' name="Details" id="Details" rows="3" placeholder='Write a Your Message here...'></textarea>
                    </div>
                    <div >
                        <button className='reflective-btn col-12 mx-auto my-3 text-center  btn btn-outline-warning border-2 rounded p-2 fs-5'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
