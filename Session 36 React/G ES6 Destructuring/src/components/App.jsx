import './App.css';
import cars from './practice';

let [honda, tesla]= cars;

let {topSpeed:hondaTopSpeed} = honda.speedStats;
let [hondaTopColour] = honda.coloursByPopularity;

let {topSpeed:teslaTopSpeed} = tesla.speedStats;
let [teslaTopColour] = tesla.coloursByPopularity;

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;