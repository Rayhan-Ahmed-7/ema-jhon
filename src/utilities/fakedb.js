const addToDb = (id)=>{
    let shoppingCart = getStoredCart();
    if(shoppingCart[id]){
        shoppingCart[id] += 1;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
const getStoredCart = ()=>{
    let shoppingCart = {};
    let storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(storedCart){
        shoppingCart = storedCart;
    }
    return shoppingCart;
}
const deleteToCart = (id)=>{
    let storedCart = getStoredCart();
    if(id in storedCart){
       delete storedCart[id];
    }
    localStorage.setItem('shopping-cart',JSON.stringify(storedCart));
}
const deleteShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart');
}
export {addToDb,getStoredCart,deleteToCart,deleteShoppingCart};