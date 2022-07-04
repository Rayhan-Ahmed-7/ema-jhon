import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItems.css';
const CartItems = ({cart,removeItem}) => {
    const {img,name,price,shipping} = cart;
    return (
        <div className='cart-compo'>
            <img src={img} alt="" />
            <div className='cart-right'>
                <div className="info">
                    <h2 title={name}>{name.length > 20? name.slice(0,20)+'...':name}</h2>
                    <p>price:${price}</p>
                    <p>Shipping Charge:${shipping}</p>
                </div>
                <button onClick={()=>removeItem(cart._id)} className='cartButton'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default CartItems;