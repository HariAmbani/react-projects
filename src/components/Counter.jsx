//what is state , how to manage state
import { Spin } from "antd";
import { useEffect, useState } from "react";
import CounterWarning from "./counterWarning";

function Counter(){
    const[count,setCount] = useState(0)
    const[count1,setCount1] = useState(0)
    const[isloading,setIsLoading] = useState(true)
    const[showWarning, setShowWarning] = useState(true)

    const closeWarning = () => {
        setShowWarning(false)
    }

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

    if(count>5)
    {
        throw new Error("counter max value is 5")
    }

    return(
        <div>
            <h1>{isloading?spinner:counter}</h1>
            <h2>counter without loading animation</h2>
            <h1>{counter}</h1>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}> Increment</button>
            {count===4 && showWarning?<CounterWarning close={closeWarning}/>:null}
        </div>
    )
}
export default Counter;


//h2>counter with loading animation</h2>
//<h1>{isloading?spinner:counter}</h1>