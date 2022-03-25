import React from 'react';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/orderReview">Order Review</a></li>
                    <li><a href="/manageInventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;