import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Display from './components/display';
import Calculator from './components/calculator';

function App() {
  let [result, setResult] = useState("");

    const addFunc = (op) => {
        setResult(result + op);
    };

    const deleteFunc = () => {
        setResult("");
    };

    const evaluateFunc = () => {
        setResult(eval(result));
    };
  return (
    <div className="App">
      
      <Calculator/>
      
    </div>
   
  );
}

export default App;
