export default function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>
            <button
                onClick={props.onClick}
            >DELETE</button>
        </div>
    );
}; 