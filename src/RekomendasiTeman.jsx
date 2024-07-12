import { useNavigate } from 'react-router-dom';
import RekomendasiTemanCSS from './RekomendasiTeman.module.css'
import logo from './assets/gray.png';
import { FaUser, FaLock, FaCamera, FaSearch } from "react-icons/fa";
import { useState } from 'react';
import ListRekomendasiTeman from './ListRekomendasiTeman'

function RekomendasiTeman() {


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

            {/* Daftar Rekomendasi Tambah Teman */}
            <ListRekomendasiTeman trigger={true}>
            </ListRekomendasiTeman>

            <ListRekomendasiTeman trigger={true}>
            </ListRekomendasiTeman>

            <ListRekomendasiTeman trigger={true}>
            </ListRekomendasiTeman>


            <button className={RekomendasiTemanCSS.btn}>Next</button>
        </div>
    )
}

export default RekomendasiTeman