import React, {useState} from "react";
import './App.css';

function App() {
  const [waterHeight, setWaterHeight] = useState(0);
  
  const [incTimer, setIncTimer] = useState(null);
  const [decTimer, setDecTimer] = useState(null);

  const incFunc = () => {
    setWaterHeight(height => height < 100 ? height+1 : height);
  }
  const decFunc = () => {
    setWaterHeight(height => height > 0 ? height-1: height);
  }

  const onIncrease = () => {    
    setTimeout(function (){
      if(decTimer || waterHeight === 0) window.clearInterval(decTimer);
      if(incTimer || waterHeight === 100) window.clearInterval(incTimer);
    }, 0)

    setTimeout(function (){
      setIncTimer(setInterval(incFunc, 100));
    }, 100)    
  }

  const onDecrease = () => {
    setTimeout(function (){
      if(decTimer || waterHeight === 0) window.clearInterval(decTimer);
      if(incTimer || waterHeight === 100) window.clearInterval(incTimer);
    }, 0)

    setTimeout(function (){
      setDecTimer( setInterval(decFunc, 100) );
    }, 100)
  }

  return (
    <div className="App">
      <div className="bathtub">
        <div className="water" style={{height:`${100-waterHeight}px`}}>
        </div>
      </div>
      <div className="buttons">
        <button onClick={onIncrease}> increaseWaterLevel </button>
        <button onClick={onDecrease}> decreaseWaterLevel </button>
      </div>
    </div>
  );
}

export default App;
