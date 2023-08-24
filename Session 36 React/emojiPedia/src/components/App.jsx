import './App.css'
import Term from './Term';

import emojipedia from "./data";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* <Term /> */}
        {emojipedia.map((emoji)=>{
          return <Term
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        })}
      </dl>
    </div>
  );
}

export default App;
