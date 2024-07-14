import StatusCSS from './Status.module.css'
import foto from './assets/Contoh.png'

function Status() {
    return (
    <div className={StatusCSS.Status}>
        <div className= {StatusCSS.foto}> 
        <img src={foto} alt="foto" /></div>
        <div className={StatusCSS.Content}>
            <div className={StatusCSS.texttengah}>
                <textarea contentEditable="true" type="text" placeholder='Ada apa hari ini?' className={StatusCSS.Text}/>
            </div>
        </div>
    </div>
    );
};

export default Status;