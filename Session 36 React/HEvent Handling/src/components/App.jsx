import { useState } from "react";

function App() {
  // EVEN HANDDLER PRACTICE
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick(){
    setHeadingText("Subbmitted")
  };

  function over(e) {
    // e.currentTarget.classList.toggle("btn-over");
    e.currentTarget.classList.add("btn-over");
  };
  // ------------------FORMS PRACTICE
  const [name, setName] = useState("");

  function inputHanddler(e){
    setName(e.currentTarget.value)
  };

  function onSubmitForm(e) {
    console.log("Default Prevented");
    e.preventDefault();
  }
  return (
  <div className="container">
    <form onSubmit={onSubmitForm}>
      <h1>{(headingText === "Hello")? (`${headingText} ${name}`) : headingText }</h1>
      <input 
        onChange={inputHanddler}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={handleClick}
        onMouseOver={ e => over(e) }
        onMouseOut={ e => (function(e){ e.currentTarget.classList.remove("btn-over") })(e) }
      >Submit</button>
    </form>
  </div>
  )
};

export default App
