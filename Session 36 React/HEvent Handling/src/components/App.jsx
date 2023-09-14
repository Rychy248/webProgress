import { useState } from "react";

function largeApp() {
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
  const [lastName, setLastName] = useState("");


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
      <h1>{(headingText === "Hello")? (`${headingText} ${name} ${lastName}`) : headingText }</h1>
      <input 
        onChange={inputHanddler}
        type="text"
        placeholder="What's your name?"
      />
      <input 
        onChange={ e => (function(e){ setLastName(e.currentTarget.value) })(e) }
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



function App() {
  // EVEN HANDDLER PRACTICE
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick(){
    setHeadingText("Subbmitted");
  };

  function over(e) {
    e.currentTarget.classList.add("btn-over");
  };
  // ------------------FORMS PRACTICE
  const [contact, setContact] = useState({name:"", lastName:"", mail:""});

  function inputHanddler(e){
    const 
      newValue = e.currentTarget.value,
      inputName = e.currentTarget.name
    ;

    // ----------option 1
    // setFullName(previewValue => ({
    //   name:(inputName === "name")? newValue : previewValue.name,
    //   lastName:(inputName === "lastName")? newValue : previewValue.lastName
    // }));
    // ----------option 2
    // setContact(previewValue => (inputName === "name") ?
    //   { name : newValue , lastName:previewValue.lastName} :
    //   { name: previewValue.name , lastName:newValue}
    // );
    // ----------option 3
    // setContact(previewValue => (function(previewValue) {
    //   let data = {...previewValue};
    //   data[`${inputName}`] = newValue;
    //   return data;
    // })(previewValue));
    // ----------option 4
    setContact(previewValue => ({...previewValue, [inputName]:newValue}));

  };
  function onSubmitForm(e) {
    console.log("Default Prevented");
    e.preventDefault();
  }
  return (
  <div className="container">
    <form onSubmit={onSubmitForm}>
      <h1>{(headingText === "Hello")? (`${headingText} ${contact.name} ${contact.lastName}`) : headingText }</h1>
      <p>{ contact.mail }</p>
      <input 
        name="name"
        onChange={inputHanddler}
        type="text"
        placeholder="What's your name?"
        value={contact.name}
      />
      <input 
        name="lastName"
        onChange={ inputHanddler }
        type="text"
        placeholder="What's your last name?"
        value={contact.lastName}
      />
      <input 
        name="mail"
        onChange={ inputHanddler }
        type="email"
        placeholder="example@mail.com"
        value={contact.mail}
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