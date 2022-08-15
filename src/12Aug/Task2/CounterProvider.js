import { useState } from "react";
import CounterContext from "./CounterContext";
import MainPage from "./MainPage";
const CounterProvider=()=>{
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
       setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }
    
    return(
        <div>
        <CounterContext.Provider value={{value:count,handleincrease:handleIncrement,handledecrease:handleDecrement}}>
            <MainPage></MainPage>
        </CounterContext.Provider>
        </div>
    )
}
export default CounterProvider