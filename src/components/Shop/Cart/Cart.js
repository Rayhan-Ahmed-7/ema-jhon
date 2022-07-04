import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {carts,deleteCart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for(const cart of carts){
        totalPrice+=cart.price * cart.quantity;
        totalShipping+=cart.shipping * cart.quantity;
    }
    let tax = parseFloat((totalPrice * .1).toFixed(2));
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-info'>
             <h2>Order Summary</h2>
             <p>Selected Items:{carts.length}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <h3>Grand Total: ${grandTotal}</h3>
             <button onClick={deleteCart} className='cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button><br/>
             {props.children}
        </div>
    );
};

export default Cart;