import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../userSlice"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
const AddUser=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const dispatch=useDispatch()
    const createUser=()=>{
        dispatch(addUser({fname:uname,email:email,phone:phone}))
    }
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='phone'){
            setPhone(e.target.value)
        }
    }
    return(
        <div>
           <Navbar></Navbar>
           <h3 className="head">Add Contact</h3>
            <form className="form">
                Username:<input type='text'className="username" onChange={(e)=>handleChange(e,'uname')}></input>
                Email:<input type='text'className="email" onChange={(e)=>handleChange(e,'email')} ></input>
                Phone:<input type='text' className="phone" onChange={(e)=>handleChange(e,'phone')} ></input>
                
            </form>
            <Link to="/"><button className="add" onClick={createUser}>add contact</button></Link>
            
        </div>
    )
}
export default AddUser