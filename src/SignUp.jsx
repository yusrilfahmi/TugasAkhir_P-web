import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import logo from './assets/logo.png';
import { FaUser, FaLock } from "react-icons/fa";

function SignUp() {
    const navigatee = useNavigate()
    return (
        <div className='wrapper'>
            <img src={logo} alt="Logo" />

            <ul>
                <li id='SignInn'>
                    <button onClick={() => navigatee('/SignIn')}>SIGN IN</button>
                </li>
                <li id='SignUp'>
                    <button >SIGN UP</button>
                </li>
            </ul>

            <div className='input-box'>
                <input type='usernamne' placeholder='Username'></input>
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password'></input>
                <FaLock className='icon' />
            </div>

            <button onClick={() => navigatee('/EditProfile')}>SIGN UP</button>
        </div>
    )
}

export default SignUp