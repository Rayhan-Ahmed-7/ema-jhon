import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';
const Shop = () => {
    //const [products,setProducts] = useProducts();
    const [products,setProducts] = useState([]);
    const [carts,setCarts] = useCart(products);
    const [pages,setPages] = useState(0);
    const [size,setSize] = useState(10);
    const [currentPage,setCurrentPage] = useState(0);
    useEffect(()=>{
        fetch('http://localhost:5000/productsCount')
        .then(res=>res.json())
        .then(data=>{
            const count = data.count;
            const pageCount = Math.ceil(count/size);
            setPages(pageCount)
        })
    },[])
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data);
        })
    },[currentPage,size])
    const cartHandler = (product)=>{
        let newCart = [];
        const exist = carts.find(item => item._id === product._id);
        if(!exist){
            product.quantity = 1;
            newCart = [...carts,product];
        }else{
            exist.quantity +=1;
            let rest = carts.filter(cart=>cart._id !== product._id);
            newCart = [...rest,exist];
        }
        setCarts(newCart);
        addToDb(product._id);
    }
    const handlePage = (number)=>{
        setCurrentPage(number);
        fetch(``)
    }
    let navigate = useNavigate('/orders');
    const deleteCart = ()=>{
        setCarts([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div>
            <div className='grid-container'>
            <div className="product-container">
            {products.map((product,index)=><Product key={product._id} product={product} cartHandler={cartHandler}></Product>)}
            </div>
            </div>
            <div className='pagination'>
                <div>
                {
                    [...Array(pages).keys()].map((number)=><button
                        key={number}
                        className={currentPage===number? 'selected':''}
                        onClick={()=>handlePage(number)}
                        
                        >{number + 1}</button>)
                }
                <select onChange={(e)=>setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                </div>
            </div>
            </div>
            <div className="cart-container">
                <Cart carts={carts} deleteCart={deleteCart}>
                <button onClick={()=>navigate('/orders')} className='cart-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;