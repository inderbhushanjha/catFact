import './App.css';
import { useState } from 'react';

function App() {
  const [fact, setFact] = useState("");
  const clickHandler = (event) => {
    event.preventDefault();
    console.log("empty");
    fetch("https://catfact.ninja/fact/").then(resp => resp.json()).then((resp) => {
      let singleFact = resp.fact;
      setFact(singleFact);
    })
    console.log(fact);
  }

  const endHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1 className='fact' onTouchEnd={endHandler} onTouchStart={clickHandler} onClick={clickHandler}>Fact</h1>
      <p className='fact-text'>{fact}</p>
    </div>
  );
}

export default App;
