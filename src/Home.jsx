import HomeCSS from './Home.module.css'
import Postingan from './Postingan.jsx';
import Post from './Postingan.jsx';
import logo from './assets/logo.png';
import pp from './assets/pp.jpg';
import foto from './assets/pp.jpg';
import { LuImagePlus } from 'react-icons/lu';
import ListTambahTemanHome from './ListTambahTemanHome.jsx';
import ProfileSide from './ProfileSide.jsx';
import StatusPopup from './StatusPopup';
import { useState } from 'react';
import back from "./assets/back.jpg"
import { useNavigate } from 'react-router-dom';


function Home(){

    const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

    return(
        
    <div className={HomeCSS.wrapper}>
        <div className ={HomeCSS.navbar}>
            <div className ={HomeCSS.kanan}>
                <button className={HomeCSS.logoutbtn}>
                    Home
                </button>
                <button onClick={() => navigate('/')} className={HomeCSS.homebtn}>
                    Logout
                </button>
            </div>
            <div className ={HomeCSS.kiri}>
                <img src={logo} alt="Logo"/> 
                
            </div>
        </div>

        <div className ={HomeCSS.home}>
            <div className={HomeCSS.kiri}>
                <div className={HomeCSS.profile}>
                <div className={HomeCSS.background}>
                    <img src={back} alt="back" />
                </div>
                    <ProfileSide>
                    </ProfileSide>
                </div>
                <div className={HomeCSS.h}>
                    <h1 className={HomeCSS.rekomendasiTeman}>Rekomendasi Teman</h1>
                    
                    {/* Rekomendasi Teman */}
                    <div className={HomeCSS.rekom}>  
                        <ListTambahTemanHome trigger={true}>

                        </ListTambahTemanHome>

                        <ListTambahTemanHome trigger={true}>

                        </ListTambahTemanHome>

                        <ListTambahTemanHome trigger={true}>

                        </ListTambahTemanHome>

                        <ListTambahTemanHome trigger={true}>

                        </ListTambahTemanHome>
                    </div> 
                    <button onClick={() => navigate('/RekomendasiTeman')} className={HomeCSS.showMoreRekomendasiTeman}>Show More</button>  
                </div>
            </div>
            <div className={HomeCSS.tengah}>
                <div className={HomeCSS.contentatas}>
                    <img src={foto} alt="foto" className={HomeCSS.fotouser}/>
                    <input type="text" placeholder ='Ada Apa Hari Ini?' className={HomeCSS.inputtext}/>
                    <button className={HomeCSS.Photobtn} onClick={openPopup}>
                        <LuImagePlus className={HomeCSS.icon}></LuImagePlus>
                        Photo                       
                    </button>
                    <StatusPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
                    <button className={HomeCSS.Postingbtn}>
                        Posting                     
                    </button>
                </div>
                <div className={HomeCSS.contentbawah}>
                    <Post post={Postingan}></Post>
                    <Post post={Postingan}></Post>
                    <Post post={Postingan}></Post>
                </div>
            </div>
            <div className={HomeCSS.kanan}>
                <div className={HomeCSS.message}>
                    Forum Hobi
                    <img src={foto} alt="foto" />
                    <div className={HomeCSS.Tengah}>
                        <b>Grub Memancing</b>
                        <div className={HomeCSS.bio}>bio</div>
                        <div className={HomeCSS.garis}></div>
                        <div className={HomeCSS.Anggota}>
                             46667848
                        </div>
                        <b>Anggota</b>
                        <div className={HomeCSS.garis}></div>
                        <div className={HomeCSS.pesan}></div>
                        <button className={HomeCSS.Showmore}>Show More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home