import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function PaymentSection() {
  const { MenuName } = useParams()

  const PaymentModes = ["UPI Pay", "QR Scanner", "Cash on Delivery"]

  return (
    <div className=''>
      <div className="container border d-flex gap-1 p-2 rounded border-3 border-warning my-3">
        <div className='col-4 mx-auto text-center border rounded border-warning py-1 px-2'>
        <div className='fw-bold border-bottom border-warning border-2 my-1 '>Payment Mode</div>
          {
            PaymentModes.map((item, index) => {
              return (

                <ul key={index} className='list-unstyled'>
                  <Link className='nav-link d-flex place-item-center' to={`/Menu/${MenuName}/Payment/${item}`}  >
                    <li  className='col-12 border border-3 bg-warning mx-auto rounded reflective-btn p-auto m-auto'>{item}</li>
                  </Link>

                </ul>
              )
            })
          }
        </div>
        <div className='col-6 border border-warning rounded mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
