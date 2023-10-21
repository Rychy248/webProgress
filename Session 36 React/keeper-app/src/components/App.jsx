
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { useState } from "react";

export default function App() {
  const [notesList, setNotesList] = useState([{title:"No title",content:"No content"}])

  function addNote(newNote) {
    setNotesList(prevNotes => [...prevNotes, newNote] );
  };
  function deleteNote(index) {
    setNotesList(prevNotes =>{
      let updatesNotes = [...prevNotes];
      updatesNotes.splice(index,1);
      return updatesNotes;
    });
  };
  return (
    <div className="App">
      < Header />
      < CreateArea
        addNote={ addNote }
      />
      {
        notesList.map( (note, index) => <Note 
          key={index}
          title={note.title}
          content={note.content}
          onClick={()=>(deleteNote(index))}
        />)
      }
      < Footer /> 
    </div>
  );
};