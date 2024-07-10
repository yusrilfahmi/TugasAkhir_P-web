import { useNavigate } from 'react-router-dom';
import EditProfileCSS from './EditProfile.module.css'
import logo from './assets/gray.png';
import { FaUser, FaLock, FaCamera } from "react-icons/fa";

function EditProfile() {
    return (
        <div className={EditProfileCSS.wrapper}>
            <ul className={EditProfileCSS.close}>
                <FaCamera className={EditProfileCSS.icon} />
                <li>
                    <button><h2>X</h2></button>
                </li>
                <li><h2>Edit Profile</h2></li>
            </ul>
            <img src={logo} alt="Logo" className={EditProfileCSS.img} />
            <h3>Nama</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='nama' ></input>
            </div>
            <h3>Tanggal lahir</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='ttl'></input>
            </div>
            <h3>Lokasi</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='ttl'></input>
            </div>
            <h3>Pekerjaan</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='ttl'></input>
            </div>
            <h3>Hobi</h3>
            <div className={EditProfileCSS.inputBox}>
                <input type='ttl'></input>
            </div>

            <button className={EditProfileCSS.btn}>Simpan</button>
        </div>
    )
}

export default EditProfile