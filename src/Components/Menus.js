import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useParams } from 'react-router-dom';
import { getFoodByCategory } from '../Services/api';
import { StaticMenuMap } from '../Components/Foods';

export default function Menus() {
  const { MenuName } = useParams();
  const [Menu, setMenu] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [totalOrder, setTotal] = useState(0);


 
useEffect(() => {
  async function fetchMenu() {
    try {
      const data = await getFoodByCategory(MenuName);

      if (data && data.length > 0) {
        console.log("Getting Data from Database");
        setMenu(data);
      } else {
        console.log("Getting Data Staticly");
        setMenu(StaticMenuMap[MenuName]);
      }

    } catch (error) {
      console.error("Backend not connected, loading static data", error);
      setMenu(StaticMenuMap[MenuName]);
    }
  }


  fetchMenu();
}, [MenuName]);
  const clickHandle = (value) => {
                  console.log(value)

    setListItems(prev => [...prev, value]);
    setTotal(prevTotal => prevTotal + value.price);
  };

  const icon = <i className='fa-solid fa-arrow-right'></i>;

  return (
    <div className="container-fluid mx-auto my-3 d-flex justify-content-center align-item-center ">
      <div className="row col-12 d-flex justify-content-center align-item-center ">
        <div className="col-12 col-lg-6  mb-3">
          <div className='p-2 border  border-warning rounded'>
        
            <div className="text-center bg-warning fs-5 mx-auto fw-bold border my-1 rounded">{MenuName}</div>
            
            <ul className="list-unstyled">
              {Menu.map(item => (
                <li key={item.itemKey} className="mb-2 ">
                  <button 
                    className='w-100 d-flex justify-content-between align-items-center border text-start bg-black rounded p-2 reflective-menus hovereffect'
                    onClick={() => clickHandle(item)}
                  >
                    {/* <div className='fs-5 fw-bold text-warning'>{item.itemKey}.</div> */}
                    <div className='fs-5 fw-bold flex-grow-1 text-warning text-center'>{item.itemName}</div>
                    <div className='fs-5 text-warning'>{icon}</div>
                    <div className='fs-5 fw-bold  mx-1 text-light'>{item.price}$</div>
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
