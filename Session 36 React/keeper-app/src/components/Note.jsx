import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>

            <IconButton aria-label="delete" onClick={props.onClick}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}; 