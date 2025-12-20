import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getCategories } from '../Services/api';
import { StaticCategories } from '../Components/Foods';
import Layout from './Layout';

export default function Menu() {
  const [categories, setCategories] = useState([]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();

        // Backend success
        if (data && data.length > 0) {
          setCategories(data);
        } 
        // Backend empty
        else {
          setCategories(StaticCategories);
        }

      } catch (error) {
        console.error("Backend not connected, using static categories", error);
        setCategories(StaticCategories);
      }
    }

    fetchCategories();
  }, []);
 
  return (
    <div className="container my-3 " style={{minHeight: "50vh"}}>
       {loading && (
        <div className='page-loader'>
        <div className="spinner-border text-warning my-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
      )}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
        {categories.map((cat) => (
          <Link key={cat.categoryId} to={`/Menu/${cat.categoryName}`}>
            <button
              type="button"
              className="btn btn-outline-warning fw-bold fs-5 reflective-btn px-3 py-2"
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
