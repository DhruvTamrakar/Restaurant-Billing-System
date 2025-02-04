import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function Menu() {
    const Menus = ["Indian Food", "Fast Food", "Desserts", "Drinks", "Chinese Food", "Pizza", "Indian Snacks"];

    return (
        <div >
            <div className=' border border-3 border-warning gap-1 d-flex px-2'>
                {
                    Menus.map((value) => {
                        return (
                            <Link className=' fs-5' key={value} to={`/Menu/${value}`}>
                                <button type='button' className='reflective-btn btn btn-outline-warning m-1 text-black fw-bold fs-5'>{value}</button>
                                </Link>
                        )

                    })
                }
            </div>

        </div>
    )
}
