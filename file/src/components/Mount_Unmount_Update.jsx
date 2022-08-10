import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Mount_Unmount_Update=()=>{
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    //runs everytime when components is mounted and unmounted
    // useEffect(()=>{
    //     console.log("Mounted");
    //     return()=>{
    //         console.log("unmounted")
    //     }
    // });

    //run only once when components is mounted and unmounted
    // useEffect(()=>{
    //     console.log("mounted");
    //     return()=>{
    //         console.log("unmounted")
    //     }
    // },[])

    //runs when the value of count1 is changed
    useEffect(()=>{
        console.log("count1 changed");
        return()=>{
            console.log("unMounted");
        }
    },[count1]);

    return(
        <>
        <h1>counter is {count1} : {count2}</h1>
        <div>
            <button onClick={()=>setCount1(count1+1)}>Increment</button>
            <button onClick={()=>setCount1(count1-1)}>Decrement</button>
        </div>
        <div>
            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <button onClick={()=>setCount2(count2-1)}>Decrement</button>
        </div>
        </>
    )
}
export default Mount_Unmount_Update;
