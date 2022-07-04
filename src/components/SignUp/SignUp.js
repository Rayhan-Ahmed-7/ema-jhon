import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import google from '../../google-logo.png';
import auth from '../../firebase.init';
const SignUp = () => {
    const [createUserWithEmailAndPassword,user,hookError] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e =>{
        setConfirmPassword(e.target.value);
    }
    if(user){
        navigate('/shop');
    }
    const handleCreateUser = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("confirm password didn't match");
            return;
        }
        if(password.length < 6){
            setError('password should be at least 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email,password)
        .then((result)=>{
            console.log(user,'user created');
        })
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser} action="">
                {/* <div className="input-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name='username' id='username'/>
                </div> */}
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' id='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' id='password' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='confirm-password' required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <p style={{color:'red'}}>{hookError}</p>
                <input className='form-submit' type="submit" value='Sign Up'/>
            </form>
            <p>
                Already have an account? <Link to='/login' className='form-link'>Login</Link>
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

export default SignUp;