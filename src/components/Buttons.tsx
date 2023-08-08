
interface Props{
    text: React.ReactNode;
    onClick: () => void;
}

function Button({text, onClick}: Props){
    return <button type="button" className="btn btn-info" onClick={onClick}>{text}</button>;
}

export default Button;