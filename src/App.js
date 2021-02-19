import React, {useState} from "react";
import './App.css';

function App() {
  const [waterHeight, setWaterHeight] = useState(0);

  const incFunc = () => {
    if(waterHeight < 100) setWaterHeight((height)=> height+20);
  }
  const decFunc = () => {
    if( waterHeight > 0 ) setWaterHeight((height)=> height-20);
  }
  
  const [incTimer, setIncTimer] = useState(null);
  const [decTimer, setDecTimer] = useState(null);

  const onIncrease = () => {
    
    setTimeout(function (){
      if(decTimer || waterHeight === 0) window.clearInterval(decTimer);
      if(incTimer || waterHeight === 100) window.clearInterval(incTimer);
    }, 0)

    setTimeout(function (){
      setIncTimer(setInterval(incFunc, 2000));
    }, 2000)    
  }

  const onDecrease = () => {
    setTimeout(function (){
      if(decTimer || waterHeight === 0) window.clearInterval(decTimer);
      if(incTimer || waterHeight === 100) window.clearInterval(incTimer);
    }, 0)

    setTimeout(function (){
      setDecTimer( setInterval(decFunc, 2000) );
    }, 2000)
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
