import { useState } from "react";

import ListItems from "./ListItems";
import FormTask from "./formTask";

function App() {
  let [list, setList] = useState(["hello","world"]);

  function inputForm(input){
    setList( prevList => [...prevList,input])
  };

  function deleteItem(index) {
    setList( prevList => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
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
        <ListItems listItems={list} deleteItem={deleteItem} />

      </div>
    </>
  )
}

export default App;
