import StatusCSS from './Status.module.css'
import foto from './assets/Contoh.png'

function Status() {
    return (
    <div className={StatusCSS.Status}>
        <div className= {StatusCSS.foto}> 
        <img src={foto} alt="foto" /></div>
        <div className={StatusCSS.Content}>
            <div className={StatusCSS.Text}>
                Emang Fefek Tugas IMK Nich kata dosennya dicek di cek di google lens kalo ada yang sama dikasih nilai nol
            </div>
        </div>
    </div>
    );
};

export default Status;