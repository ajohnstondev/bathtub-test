import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [waterHeight, setWaterHeight] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(()=>{
    setTimeout(()=> {
      setWaterHeight(he=> {
        if ( step === 1 && he < 100) return he+1;
        else if ( step === -1 && he > 0) return he-1;
        else return he;
      });
    }, 100)
  }, [waterHeight])

  return (
    <div className="App">
      <div className="bathtub">
        <div className="water" style={{height:`${100-waterHeight}px`}}>
        </div>
      </div>
      <div className="buttons">
        <button onClick={()=>{setStep(1); if (waterHeight < 100) setWaterHeight(height=>height+1)}}> increaseWaterLevel </button>
        <button onClick={()=>{setStep(-1); if (waterHeight > 0) setWaterHeight(height=>height-1)}}> decreaseWaterLevel </button>
      </div>
    </div>
  );
}

export default App;
