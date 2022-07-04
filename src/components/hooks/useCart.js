import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const useCart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        let storedCart = getStoredCart();
        let cartsArray = [];
        const ids = Object.keys(storedCart);
        console.log(ids);
        fetch('http://localhost:5000/productsByIds',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ids)
        })
        .then(res=>res.json())
        .then(products=>{
        for (const id in storedCart) {
            let product = products.find(product => id === product._id);
            if (product) {
                product.quantity = storedCart[id];
                cartsArray.push(product)
            }
        }
        setCarts(cartsArray);
    });
}, [])
return [carts, setCarts];
};

export default useCart;