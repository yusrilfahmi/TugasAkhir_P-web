import React from 'react'
import RekomendasiTemanCSS from './RekomendasiTeman.module.css'
import { useState } from 'react'
import logo from './assets/gray.png'

function ListRekomendasiTeman(props) {

    const [bgColor, setBgColor] = useState("white") //follow
    const [colorName, setColorName] = useState("black") //follow
    const [btnName, setBtnName] = useState("Follow")
    const [btnConfirm, setBtnConfirm] = useState("Skip")

    const handleButtonOnClick = () => {

        if (btnName=="Follow") {
            setBgColor("gray")
            setColorName("white")
            setBtnName("Following")
            setBtnConfirm("Done")
        }else{
            setBgColor("white")
            setColorName("black")
            setBtnName("Follow")
            setBtnConfirm("Skip")
        }
    };

  return(props.trigger) ? (
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
  ) : "";
}

export default ListRekomendasiTeman