import { useNavigate } from 'react-router-dom';
import RekomendasiTemanCSS from './RekomendasiTeman.module.css'
import logo from './assets/gray.png';
import { FaUser, FaLock, FaCamera, FaSearch } from "react-icons/fa";

function RekomendasiTeman() {
    return (
        <div className={RekomendasiTemanCSS.wrapper}>
            <ul className={RekomendasiTemanCSS.close}>

                <li>
                    <button><h2>X</h2></button>
                </li>
                <li><h2>Rekomendasi Daftar Teman</h2></li>
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
                    <li><button>Follow</button></li>
                </ul>
            </div>


            <button className={RekomendasiTemanCSS.btn}>Skip</button>
        </div>
    )
}

export default RekomendasiTeman