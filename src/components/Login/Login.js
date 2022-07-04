import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import google from '../../google-logo.png';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useNavigate();
    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleUserSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleUserSignIn} action="">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' id='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' id='password' required/>
                </div>
                <p>{error?.message}</p>
                <p>{loading && 'loading...'}</p>
                <input className='form-submit' type="submit" value='Login'/>
            </form>
            <p>
                New to Ema-john? <Link to='/signup' className='form-link'>Create an Account</Link>
            </p>
            <div className='form-division'>
                <div className="line"></div>
                <div>or</div>
                <div className="line"></div>
            </div>
            <button className='google-signin-btn'>
                <img src={google} alt="" />
                <span>Continue with google</span>
            </button>
            </div>
        </div>
    );
};

export default Login;