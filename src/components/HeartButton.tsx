import { BsHeart, BsFillHeartFill} from 'react-icons/bs';
import {useState} from "react";

interface Props {
    onClick: () => void;
}

export const HeartButton = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);

    //set the status of the button
    //this isn't ideal for dynamically depending on the data that is presenting to the user... so there should be a prop to initialize the status to the user
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    
    if(status) return <BsFillHeartFill color="#ff6b81" size={20} onClick={toggle}/>;
    return <BsHeart size={20} onClick={toggle}/>
}
