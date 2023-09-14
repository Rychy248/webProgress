import { useState } from "react";

import FormTask from "./FormTask";
import ListItems from "./ListItems";

function App() {
  let [list, setList] = useState(["hello","world"]);

  function inputForm(input){
    setList( prevList => [...prevList,input])
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        
        <FormTask 
          onClick={ inputForm }
        />
        <ListItems listItems={list} />

      </div>
    </>
  )
}

export default App;
