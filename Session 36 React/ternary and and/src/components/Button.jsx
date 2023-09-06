function Button(props) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={props.className}
        >
            {props.innerHtml}
        </button>
    );
};
    
export default Button;
    