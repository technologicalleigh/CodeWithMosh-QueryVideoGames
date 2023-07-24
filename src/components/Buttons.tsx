
interface Props{
    text: React.ReactNode;
}

function Button({text}: Props){
    return <button type="button" className="btn btn-info">{text}</button>;
}

export default Button;