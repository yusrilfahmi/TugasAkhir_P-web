import { useNavigate } from 'react-router-dom';
import './SignIn.css'
import logo from './assets/logo.png';
import { FaUser, FaLock } from "react-icons/fa";
import { useEffect, useState } from 'react';

function SignIn() {
    const navigate = useNavigate()


    return (
        <div className='wrapper'>
            <img src={logo} alt="Logo" />

            <ul>
                <li id='SignIn'>
                    <button >SIGN IN</button>
                </li>
                <li id='SignUpp'>
                    <button onClick={() => navigate('/SignUp')}>SIGN UP</button>
                </li>
            </ul>

            <div className='input-box'>
                <input
                type='usernamne'
                placeholder='Username'
                ></input>
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='password'
                placeholder='Password'
                ></input>
                <FaLock className='icon' />
            </div>

            <button onClick={() => navigate('/Home')} >SIGN IN</button>
            <p style={{display: 'flex', justifyContent: 'space-around', paddingTop:'10px'}}>Silahkan Login</p>
        </div>
    )
}

export default SignIn