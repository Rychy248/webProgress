function Button(props) {
    return (
        <button
            type={props.type}
        >
            {props.innerHtml}
        </button>
    );
};
    
export default Button;
    