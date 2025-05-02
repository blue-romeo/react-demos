import React from "react";
import { useState, useEffect } from "react";


 
const App = () => { 
  const [value, setValue] = useState(0);
  const [sm, setSm] = useState(0);
  
useEffect(() => {
  console.log("call useEffect");
  document.title = `increment ${value}`;
},[value, sm]);
  return(
    <section>
         <h2> {value}</h2>
         <button onClick={() => setValue(value+1)}>click me</button>
         <button onClick={() => setSm(value+1)}>click</button>
    </section>
  )
    
};
export default App;