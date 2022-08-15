import AuthContext from "./AuthContext"
import { useContext } from "react"
const MainPage=()=>{
    const {loginStatus,change,login}=useContext(AuthContext)
    return(
        <div>
        Username<input type='text' onChange={(e)=>change(e,"username")}></input>
        Password<input type='text' onChange={(e)=>change(e,"password")}></input>
        <button onClick={login}>login</button>
        {
                loginStatus?<h1>You are logged  in :</h1>:<h1>Please login</h1>
            } 
        </div>
    )
}
export default MainPage