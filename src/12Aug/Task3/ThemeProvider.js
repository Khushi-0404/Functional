import { useState } from "react"
import ThemeContext from "./ThemeContext"
import MainPage from "./MainPage"
const ThemeProvider=()=>{
    const [theme,setTheme]=useState("light")
 const getClassName=(item)=>{
    if(theme==='light'){
        return "light"
    }
    else{
        return "dark"
    }
}
return(
    <div>
        <ThemeContext.Provider value={{className:getClassName}}>
            <MainPage></MainPage>
        </ThemeContext.Provider>
        </div>
    )
}
export default ThemeProvider