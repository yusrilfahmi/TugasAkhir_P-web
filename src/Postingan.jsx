import PostCSS from './Postingan.module.css'
import {FaHeart,FaComment} from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import foto from './assets/pp.jpg';

function Postingan(){
    return(
    <div className={PostCSS.post}>
        <img src={foto} alt="foto" className={PostCSS.fotouserpost}/>
            <div className={PostCSS.postatas}>
            <div className={PostCSS.nama}>Qomar</div>
            <div className={PostCSS.username}>@izamqo</div>
            <div className={PostCSS.lamapost}>lima Menit Yang Lalu</div>
            <button className={PostCSS.morebtn}><IoIosMore></IoIosMore></button>
        </div>
        <div className={PostCSS.isi}>
            <div className={PostCSS.image}>
            <img src={foto} alt="foto" className={PostCSS.foto}/>
            </div>
            lorem20</div>
        <div className={PostCSS.bawah}>
            <div className={PostCSS.like}>
                <FaHeart className={PostCSS.icon}></FaHeart>4542
            </div>
            <div className={PostCSS.komen}>
                <div className={PostCSS.comment}>1313</div>
                <div className={PostCSS.textcomment}>Comment</div>
            </div>
        </div>
        <div className={PostCSS.buttonbawah}>
            <button className={PostCSS.likebtn}><FaHeart className={PostCSS.icon}></FaHeart>Like</button>
            <button className={PostCSS.commentbtn}><FaComment className={PostCSS.icon}></FaComment>Comment</button>
        </div>
        <div className={PostCSS.panetambahan}></div>
    </div>
    )
}
export default Postingan