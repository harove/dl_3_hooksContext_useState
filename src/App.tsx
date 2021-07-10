import {useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={e=>setCounter(counter+1)} >add</button>
    </div>
  );
}

export default App;
