import {useState,useEffect} from "react";

function Button() {
//     const [counter,setCounter] = useState(0);

//     let newCounter = 0;

//     function clickHandler(){
//         newCounter = counter + 1;
//     console.log('saya di klik ' + newCounter + ' kali');
//     setCounter(newCounter);
// }

//     return(
//         <button onClick={clickHandler}>saya di klik {counter} kali</button>
//     )
        const [countLike, setCountLike] = useState(0);
        const [countDislike, setCountDislike] = useState(0);
        useEffect(() =>{
            console.log('Waduh like ' + countLike + ' Dislike ' + countDislike)
        },[countLike]);
        return(
                <>
                <button onClick={() => setCountLike(countLike + 1)}
                    >{countLike} Like </button>
                <button onClick={() => setCountDislike(countDislike + 1)}
                    >{countDislike} Dislike </button>
                </>
        )
}

export default Button