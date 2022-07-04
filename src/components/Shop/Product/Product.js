import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = ({product,cartHandler}) => {
    const {img,name,price,ratings,seller} = product;
    return (
        <div className='product'>
            <div className="product-content">
                <img src={img} alt="img" />
                <div className="product-details">
                    <h3>{name}</h3>
                    <h4>Price:{price}</h4>
                    <p>Manufacturer:{seller}</p>
                    <p>Ratings:{ratings} star</p>
                </div>
                <button onClick={()=>cartHandler(product)} className='product-btn'>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;