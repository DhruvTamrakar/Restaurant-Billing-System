import { Link } from "react-router-dom";

export default function Cart({ listItems, totalOrder, MenuName }) {
    const icon = <i className='fa-solid fa-arrow-right'></i>;

    return (
        <div className="p-1 rounded border border-warning">
            <div className='text-center bg-warning fs-5 fw-bold my-2 px-auto rounded position-sticky'>
                Your Order
            </div>

            <ul className="list-unstyled glass-nav text-warning">
                {listItems.map((item, index) => (
                    <li className='col-12 border-bottom py-2 d-flex mx-auto px-auto rounded ' key={index}>
                        {/* Use item.itemName from backend */}
                        <div className='col-5 mx-auto px-auto py-1 fs-5'>{item.itemName}</div>
                        <div className='col-1 mx-auto px-auto py-1 fs-5'>{icon}</div>
                        <div className='col-2 mx-auto px-auto py-1 fs-5 text-end'>{item.price}.00$</div>
                    </li>
                ))}
            </ul>

            {listItems.length !== 0 && (
                <>
                    <li className='col-11 border border-3 d-flex mx-auto my-1 px-auto bg-warning rounded position-sticky'>
                        <div className='col-5 mx-auto px-auto py-1 fs-5 fw-bold'>Total Amount</div>
                        <div className='col-1 mx-auto px-auto py-1 fs-5'>{icon}</div>
                        <div className='col-2 mx-auto px-auto py-1 fs-5 text-end'>{totalOrder}.00$</div>
                    </li>

                    <Link 
                        to={`/Menu/${MenuName}/Payment`} 
                        className='col-12 border border-3 d-flex my-1 nav-link bg-warning rounded reflective-btn'
                    >
                        <div className='col-5 mx-auto px-auto py-1 fs-5 fw-bold text-black'>
                            Go For Payment
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
}
