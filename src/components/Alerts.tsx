interface Props {
    children: React.ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
    
  )
}

export default Alert