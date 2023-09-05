import './App.css'
import Login from './Login';
import Logeed from './logeed';

let isLoggedIn = false;
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

function App() {

  return (
    <div className="container">
      { /*option 1, large */}
      {/* { renderCondition() } */}

      { /*option 2*/}
      { isLoggedIn? <Logeed />: <Login/> }

      {/* other options to render one side, we can use null to set something */}
      { (currentTime > 12)? <h1>Stop working</h1> : null }
    </div>
  )
}

export default App
