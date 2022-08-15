import ThemeContext from "./ThemeContext"
import './theme.css'
import { useContext } from "react"
const MainPage=()=>{
    const{className}=useContext(ThemeContext)
    return(
        <div>
            <button className={className?light:dark}>Change Theme</button>
        </div>
    )
}
export default MainPage