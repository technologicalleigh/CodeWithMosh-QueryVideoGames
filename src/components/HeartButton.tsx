import { BsHeart, BsFillHeartFill} from 'react-icons/bs';
import {useState} from "react";

export const HeartButton = () => {
    const [status, setStatus] = useState(false);
    
    if(status) return <BsFillHeartFill color="#ff6b81" size={20} onClick={()=> setStatus(false)}/>;
    return <BsHeart size={20} onClick={()=> setStatus(true)}/>
}
