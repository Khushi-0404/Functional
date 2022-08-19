import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../userSlice";
import { useSelector } from "react-redux";
import { removeUser } from "../../userSlice";
import {useContext, createContext ,useState} from "react";
import "./style.css"

import ReactSwitch from "react-switch"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export const ThemeContext = createContext({theme:null});

const ViewUsers=()=>{
    const dispatch=useDispatch()
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      };
    
    const {loading,usersData,statusText}=useSelector((state)=>state.user.value)
    
    const handleDelete=(userid)=>{
        dispatch(removeUser({userid:userid}))
    }
    
    return(
        <div>
            <h3>{statusText}</h3>
            <Navbar></Navbar>
            <h1 className="head">Contact Details</h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label className="theme"> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div className="user" >
            {
                usersData.map((item)=>(
                    <div className="container"id={theme} >
                        <h1>{item.fname} <i className="fa fa-trash" onClick={()=>handleDelete(item.id)}></i><Link to ="/update"><i className="fas fa-edit" ></i></Link> </h1>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        
                        
                    </div>
                ))
            }</div>
            </ThemeContext.Provider>
        </div>
    )
}
export default ViewUsers