const Button = ({title, type, onClose, onClick, classname}) => {
    return ( 
        <button  type={type} onClick={onClick} className={classname}>
            <p>{title}</p>
        </button>
     );
}
 
export default Button;