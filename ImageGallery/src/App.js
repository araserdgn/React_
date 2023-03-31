import "./App.css";

import Data from './Data.json'
import { useEffect, useState } from "react";
import Alisveris from "./Alisveris";

function App() {
  const[users,setUsers]=useState(Data);

  return (
    <div className="App">

      <Alisveris users={users}/>  
    
    </div>
  );
}

export default App;
