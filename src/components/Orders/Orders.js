import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteToCart } from '../../utilities/fakedb';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Cart from '../Shop/Cart/Cart';
import CartItems from './CartItems';
const Orders = () => {
    const [products,setProducts] = useProducts();
    const [carts,setCarts] = useCart(products);
    const removeItem = (id) =>{
        let restItem = carts.filter(cart=>cart._id!==id);
        setCarts(restItem);
        deleteToCart(id);
    }
    const navigate = useNavigate();
    return (
        <div className='shop-container'>
            <div className='grid'>
                {carts.map(cart => <CartItems key={cart._id} cart={cart} removeItem={removeItem}></CartItems>)}
            </div>
            <div className='cart-container'>
              <Cart carts={carts}>
              <button onClick={()=>navigate('/shipment')} className='cart-btn'>proceed shipment</button>
              </Cart>
            </div>
        </div>
    );
};

export default Orders;