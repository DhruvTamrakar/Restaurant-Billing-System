import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useParams } from 'react-router-dom';
import { getFoodByCategory } from '../Services/api';

export default function Menus() {
  const { MenuName } = useParams();
  const [Menu, setMenu] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [totalOrder, setTotal] = useState(0);

  useEffect(() => {
    async function fetchMenu() {
      const data = await getFoodByCategory(MenuName);
      setMenu(data);
    }
    fetchMenu();
  }, [MenuName]);

  const clickHandle = (value) => {
    setListItems(prev => [...prev, value]);
    setTotal(prevTotal => prevTotal + value.price);
  };

  const icon = <i className='fa-solid fa-arrow-right'></i>;

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-lg-8 mb-3">
          <div className='p-2 border border-warning rounded'>
            <div className="text-center bg-warning fs-5 fw-bold border my-1 rounded">{MenuName}</div>
            <ul className="list-unstyled">
              {Menu.map(item => (
                <li key={item.foodId} className="mb-2">
                  <button 
                    className='w-100 d-flex justify-content-between align-items-center border text-start bg-white rounded p-2'
                    onClick={() => clickHandle(item)}
                  >
                    <div className='fs-5 fw-bold'>{item.itemKey}.</div>
                    <div className='fs-5 fw-bold flex-grow-1 text-center'>{item.itemName}</div>
                    <div className='fs-5'>{icon}</div>
                    <div className='fs-5 fw-bold text-end'>{item.price}.00$</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <Cart listItems={listItems} totalOrder={totalOrder} MenuName={MenuName} />
        </div>
      </div>
    </div>
  );
}
