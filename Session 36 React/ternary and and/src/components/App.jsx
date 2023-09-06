import './App.css'
import Button from './Button';
import Login from './Login';
import Register from './Register';
import Logeed from './logeed';

import { useState } from 'react';

let isLoggedIn = true;
let userIsRegistered = true;
let userData = {name:"Rychy",password:"pass"};

const currentTime = new Date().getHours();

function renderCondition() {
  // Option one, large option 
  if (isLoggedIn){
    return(<>
      <Logeed />
    </>)
  }else{
    return(<>
      <Login />
    </>)
  };
};


// states demo vars

function App() {
  let [strike, setStrike] = useState(false);

  return (
    <div className="container">
      <p style={!strike? {textDecoration: "line-through"} : null }>say hello</p>

      <Button 
        className="btn"
        onClick={ ()=>{ setStrike(!strike) } }
        type="text"
        innerHtml="ToogleShow"
      />

      { /*option 1, large */}
      {/* { renderCondition() } */}

      { /*option 2*/}
      {/* { isLoggedIn? <Logeed />: <Login/> } */}

      {/* other options to render one side, we can use null to set something */}
      {/* { (currentTime > 12)? <h1>Stop working</h1> : null } */}
      {
        (isLoggedIn && userIsRegistered )?
          <Logeed user={userData.name} /> :
            userIsRegistered ?
              <Login/> :
                <Register />
      }
    </div>
  )
}

export default App
