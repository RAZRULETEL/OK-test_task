import React from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        <Counter quantity={"wetrgrstdf"} size={24}/>
        <Counter quantity={"123"} size={20} stroke={false}/>
        <Counter quantity={"12"} size={16}/>
        <Counter quantity={"sd"} size={8} pulse={true}/>
    </div>
  );
}

export default App;
