import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getCategories } from '../Services/api';

export default function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="container my-3">
      <div className='d-flex flex-wrap gap-2 justify-content-center mb-3'>
        {categories.map((cat) => (
          <Link key={cat.categoryId} to={`/Menu/${cat.categoryName}`}>
            <button
              type='button'
              className='btn btn-outline-warning text-black fw-bold fs-5 reflective-btn px-3 py-2'
            >
              {cat.categoryName}
            </button>
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
