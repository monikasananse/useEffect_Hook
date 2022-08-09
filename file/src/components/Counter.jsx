import React from "react";
import { useState,useEffect } from "react";
const Counter=()=>{
    const [count,setCount]=useState(10);
    useEffect(()=>{
        const id=setInterval(()=>{
            setCount(function(prev){
                if(prev===0)
                {
                    clearInterval(id);
                    return prev;
                }
                return prev-1;
            });
            },1000);
    },[])
     return(
        <>
        <h1>counter {count}</h1>
        </>
    )
}
export default Counter;

