import { useState } from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import {login} from '../reducers/loginReducer'
const LoginComponent=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [designation,setDesignation]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        e.preventDefault()
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='designation'){
            setDesignation(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({username:uname,email:email,designation:designation}))

    }
return(
    <div>
        <Link to="/"></Link>
        <h3>Login Form</h3>
       Username: <input type='text' onChange={(e)=>handleChange(e,'uname')}></input>
       Email: <input type='text' onChange={(e)=>handleChange(e,'email')}></input>
       Designation: <input type='text' onChange={(e)=>handleChange(e,'designation')}></input>
       <button onClick={(e)=>handleLogin(e)}><Link to="/user">login</Link></button>
    </div>
)
}
export default LoginComponent