//what is state , how to manage state
import { Spin } from "antd";
import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount] = useState(0)
    const[count1,setCount1] = useState(0)
    const[isloading,setIsLoading] = useState(true)

    const decrement = ()=>{
        setIsLoading(true)
        setCount(count-1)
    }

    const increment = ()=>{
        setIsLoading(true)
        setCount(count+1)
    }
    useEffect(() => { 
        setTimeout(()=>{
            setIsLoading(false)
        },500)
    },[isloading]);
    
    const spinner = <Spin size="large" />
    const counter = <h1>Counter : {count}</h1>

    return(
        <div>
            <h1>{isloading?spinner:counter}</h1>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}> Increment</button>
        </div>
    )
}
export default Counter;