import { useState } from "react"
const Usestate = ()=>{
    let[count, setCount] = useState(0)

    const incre= ()=>{
        setCount(count+1);
    }
    const decre= ()=>{
        if(count>0)
            setCount(count-1);
    }
    const set= ()=>{
        setCount(0);
    }

    return(
        <div>
            <h3>Cout {count} </h3>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={set}>Reset</button>
        </div>
    )
}
export default Usestate