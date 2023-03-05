import React from 'react';
import './App.css';
import {Person} from "./Person";

function App() {
  return (
    <div className="App">
      <Person 
        name="Julia"
        email="example@gmail.com"
        age={23}
        IsMarried={false}
        friends={["Jammie","johny", "jasmin"]}
      />
    </div>
  );
}

export default App;
