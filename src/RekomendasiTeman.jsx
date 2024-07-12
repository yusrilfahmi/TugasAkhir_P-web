import { useNavigate } from 'react-router-dom';
import RekomendasiTemanCSS from './RekomendasiTeman.module.css'
import logo from './assets/gray.png';
import { FaUser, FaLock, FaCamera, FaSearch } from "react-icons/fa";
import { useState } from 'react';

function RekomendasiTeman() {

    const [bgColor, setBgColor] = useState("white") //follow
    const [colorName, setColorName] = useState("black") //follow
    const [btnName, setBtnName] = useState("Follow")
    const [btnConfirm, setBtnConfirm] = useState("Skip")

    const handleButtonOnClick = () => {
        setBgColor("gray")
        setColorName("white")
        setBtnName("Following")
        setBtnConfirm("Done")
    }

    return (
        <div className={RekomendasiTemanCSS.wrapper}>
            <ul className={RekomendasiTemanCSS.close}>
                <li className={RekomendasiTemanCSS.tutup}><button><h2>X</h2></button></li>
                <li><h2>Rekomendasi Tambah Teman</h2></li>
            </ul>

            <div className={RekomendasiTemanCSS.inputBox}>
                {/* <FaSearch className={RekomendasiTemanCSS.icon} /> */}
                <input type='search' placeholder='Ketik Username Teman Anda'></input>

            </div>

            <div className={RekomendasiTemanCSS.follow}>
                <ul>
                    <li><img src={logo} alt="Logo" className={RekomendasiTemanCSS.img} /></li>
                    <li><ul>
                        <li>Nama</li>
                        <li>Username</li>
                    </ul>
                    </li>
                    <li><button style={{backgroundColor: bgColor, color: colorName}} className={RekomendasiTemanCSS.btnFollow} onClick={handleButtonOnClick}>{btnName}</button></li>
                </ul>
            </div>


            <button className={RekomendasiTemanCSS.btn}>{btnConfirm}</button>
        </div>
    )
}

export default RekomendasiTeman