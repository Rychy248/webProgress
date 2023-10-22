
import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });

  const [isExpanded, setIsExpanded] = useState(false);
  function expand() {
    setIsExpanded(true);
  };
  function handleNoteChange(e) {
    setNote((prevNote) => ({
      ...prevNote,
      [e.target.name]: e.target.value,
    }));
  };
  function send(e) {
    e.preventDefault();
    const newNote = note;

    setNote({
      title: "",
      content: "",
    });

    props.addNote(newNote);
  };

return (
  <div>
    
      <form onSubmit={send} className="create-note">
        {isExpanded && <input 
            name="title"
            placeholder="Title"
            required={true}
            value={note.title}
            onChange={handleNoteChange}
        />}
        <hr />
        <textarea
            onClick={expand}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded? "3" : "1"}
            required={true}
            value={note.content}
            onChange={handleNoteChange}
        />
        <Zoom in={isExpanded}>
          <Fab aria-label="add" type="submit">
            <NoteAddIcon/>
          </Fab>
        </Zoom>
      </form>
    
  </div>
);
}
export default CreateArea;
