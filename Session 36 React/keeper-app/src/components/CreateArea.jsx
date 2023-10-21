import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });

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
    <form onSubmit={send}>
      <input 
          name="title"
          placeholder="Title"
          required={true}
          value={note.title}
          onChange={handleNoteChange}
      />
      <hr />
      <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          required={true}
          value={note.content}
          onChange={handleNoteChange}
      />
      <button type="submit">Add</button>
    </form>
  </div>
);
}
export default CreateArea;
