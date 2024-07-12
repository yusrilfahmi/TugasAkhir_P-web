import React from 'react'
import HomeCSS from './Home.module.css'
import pp from './assets/pp.jpg';
import { useState } from 'react';

function ListTambahTemanHome(props) {
    const [bgColor, setBgColor] = useState("white") //follow
    const [colorName, setColorName] = useState("black") //follow
    const [btnName, setBtnName] = useState("Follow")

    const handleButtonOnClick = () => {

        if (btnName=="Follow") {
            setBgColor("gray")
            setColorName("white")
            setBtnName("Following")
        }else{
            setBgColor("white")
            setColorName("black")
            setBtnName("Follow")
        }
    }

  return(props.trigger) ? (
                        <ul className={HomeCSS.listRekomendasiTeman}>
                        <li>
                        <img src={pp} alt='pp' className={HomeCSS.imgRekomendasiTeman}></img>
                        </li>
                        <li>
                            <ul>
                        <li>Nama</li>
                        <li>Username</li>
                            </ul>
                        </li>

                        <li><button style={{backgroundColor: bgColor, color: colorName}} className={HomeCSS.btnFollow} onClick={handleButtonOnClick}>{btnName}</button></li>
                    </ul>
  ) : ""
}

export default ListTambahTemanHome