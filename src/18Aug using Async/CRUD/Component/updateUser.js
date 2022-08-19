import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../../userSlice"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import './style.css'
const UpdateUser=()=>{
    const [id,setID]=useState('')
    const[phone,setPhone]=useState('')
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const modifyUser=()=>{
        dispatch(updateUser({userid:id,newname:uname,newemail:email,newphone:phone}))
    }
    const handleChange=(e,key)=>{
        if(key==='id'){
            setID(e.target.value)
        }
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
            <h3 className="head">Update Contact</h3>
            <form className="form">
                ID<input type='text'className="id" placeholder="Enter Id" onChange={(e)=>handleChange(e,'id')}></input>
                Username:<input type='text'className="username" placeholder="Enter Username" onChange={(e)=>handleChange(e,'uname')}></input>
                Email:<input type='text'className="email" placeholder="Enter Email" onChange={(e)=>handleChange(e,'email')} ></input>
                Phone:<input type='text'className="phone" placeholder="Enter Phone No." onChange={(e)=>handleChange(e,'phone')} ></input>
                
            </form>
            <Link to="/"><button className="update" onClick={modifyUser}>update contact</button></Link>
            
        </div>
    )
}
export default UpdateUser