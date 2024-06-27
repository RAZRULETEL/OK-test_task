import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
        <Counter quantity={"wetrgrstdf"} size={24}/>
        <Counter quantity={"123"} size={20} stroke={false}/>
        <Counter quantity={"12"} size={16}/>
        <Counter quantity={"sd"} size={8} pulse={true}/>
        <Button label="test" isPrimary={true}>
            <Button.Counter quantity={"123"} size={16}/>
        </Button>
    </div>
  );
}

export default App;
