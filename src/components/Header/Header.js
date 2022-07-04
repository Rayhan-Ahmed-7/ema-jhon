import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth)
    }
    return (
        <div className='header'>
            <nav className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Order</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {
                        user ? 
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <li><Link to="/login">login</Link></li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;