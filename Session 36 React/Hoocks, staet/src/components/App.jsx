import { useState } from 'react';
import "./App.css"

function App() {

  // USING DESESTRUCTURING FUNCTION
  // cont [ renameDesestructuring ] = [state, function]
  let [count, setCount]= useState(0);

  // practice  
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [timerActive, setTimerActive]= useState(false);;
  
  function activeTime() {
    // setTime
    setTime(new Date().toLocaleTimeString());
    // active timer
    if (!timerActive) {
      console.log("active");
      setTimerActive(true);
      setInterval(() =>{ setTime(new Date().toLocaleTimeString()) }, 1000);  
    };
  };

  return (
    <>
      <div className="container">
        <h1 className='read-the-docs' >Counter</h1>
        <h1>{ count }</h1>
        <button onClick={ ()=>{ setCount(++count) } } >+</button>
        <button onClick={ ()=>{ setCount(--count) } } >-</button>

        <h1>{time}</h1>
        <button onClick={ activeTime } >Get Time</button>
      </div>
    </>
  )
}

export default App