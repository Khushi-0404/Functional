import CounterContext from "./CounterContext"
import { useContext } from "react"
const MainPage=()=>{
    
    const {value,handleincrease,handledecrease}=useContext(CounterContext)
    return(
        <div>

            <button onClick={handleincrease}>+</button>
            <h1>{value}</h1>
            <button onClick={handledecrease}>-</button>
                           
            
            
        </div>
    )
}
export default MainPage