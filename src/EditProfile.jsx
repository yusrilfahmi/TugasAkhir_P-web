import { useNavigate } from 'react-router-dom';
import EditProfileCSS from './EditProfile.module.css'
import logo from './assets/pp.jpg';
import { FaUser, FaLock } from "react-icons/fa";

function EditProfile() {
    return (
        <>
            <div className={EditProfileCSS.closeWrapper}>
                <ul className={EditProfileCSS.close}>
                    <li>
                        <p>X</p>
                    </li>
                    <li>
                        <h2>Edit Profile</h2>
                    </li>
                </ul>
            </div>

            <div className={EditProfileCSS.wrapper}>

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
        </>

    )
}

export default EditProfile