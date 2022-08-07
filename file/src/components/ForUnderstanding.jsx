import React from "react";
import { useState,useEffect } from "react";

const ForUnderstanding=()=>{
    const [count,setCount]=useState(0);
  console.log(1);
  useEffect(()=>{
    console.log("inside Effect")
  },[count])
  console.log(2)
  
  return (
    <div >
      <h1>HELLO MONIKA</h1>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
}
export default ForUnderstanding;