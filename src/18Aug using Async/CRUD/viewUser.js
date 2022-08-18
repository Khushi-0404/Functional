import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useSelector } from "react-redux";
import {useContext, createContext ,useState} from "react";
import "./style.css"

import ReactSwitch from "react-switch"
export const ThemeContext = createContext({theme:null});

const ViewUsers=()=>{
    const dispatch=useDispatch()
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      };
    
    const {loading,usersData}=useSelector((state)=>state.user.value)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    return(
        <div>
            <h1>List of users</h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div className="user">
            {
                usersData.map((item)=>(
                    <div className="container" id={theme}>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                    </div>
                ))
            }</div>
            </ThemeContext.Provider>
        </div>
    )
}
export default ViewUsers