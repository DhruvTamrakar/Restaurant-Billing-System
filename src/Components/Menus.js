import React, { useState } from 'react'
import Cart from './Cart'
import { useParams } from 'react-router-dom';
import { IndianFood, FastFood, Desserts, Drinks, ChineseFood, Pizza, IndianSnacks } from './Foods';
export default function Menus() {
   
    
    const params = useParams()

    function getDataByParams(params){
        switch (params.MenuName) {
            case 'Indian Food':
                return IndianFood;
            case 'Fast Food':
                return FastFood;
            case 'Drinks':
                return Drinks;
            case 'Chinese Food':
                return ChineseFood;
            case 'Pizza':
                return Pizza;
            case 'Indian Snacks':
                return IndianSnacks;
            case 'Desserts':
                return Desserts;
            default:
                return [];
        }
    }    
    const Menu = getDataByParams(params)   
         

    const [listItems, setListItems] = useState([])
    const [totalOrder, settotal] = useState(0)
    
    const clickhandel = (value)=>{
        setListItems((prevItems) => [...prevItems, value])
        settotal(totalOrder + value.price)
    }
  
    const icon = <i className='fa-solid fa-arrow-right'></i>
    return (
        <>
            <div className='d-flex justify-content-between aline-item-center my-2'>

                <div className='col-7 mx-auto p-1 border border-warning rounded  '>
                    <div className="text-center bg-warning fs-5 fw-bold border my-1  rounded">{params.MenuName}</div>
                    <ul className="list-unstyled">
                        {Menu.map((element) => (
                            <li key={element.key} >
                                <button className='col-12 mx-auto d-flex border text-center bg-white rounded ' onClick={()=> clickhandel(element)}>
                                    <div className='col-2 mx-auto px-auto py-1 fs-4 fw-bold '>{element.key}.</div>
                                    <div className='col-5 mx-auto px-auto py-1 fs-4 fw-bold '>{element.name}</div>
                                    <div className='col-1 mx-auto px-auto py-1 fs-4 fw-bold '>{icon}</div>
                                    <div className='col-2 mx-auto px-auto py-1 fs-4 fw-bold text-end'>{element.price}.00$</div>
                                </button>
                            </li>
                            
                        ))}
                    </ul>
                </div>
                <div className='col-4 mx-auto'>
                   
                   <Cart listItems={listItems} totalOrder={totalOrder} MenuName={params.MenuName}/>
                </div>
            </div>
        </>
    )
}
