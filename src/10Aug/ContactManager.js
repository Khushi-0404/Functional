import react from 'react'
import './ContactManager.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ContactManager=()=>{
    const [contact,setContact]=useState([])
    const [id,setId]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [flag,setFlag]=useState('false')
    useEffect(()=>{
        console.log('inside useeffect at intial')
        axios.get('http://localhost:3001/empDetails').then((
            res)=>setContact(res.data)).
            catch((err)=>console.log(err))
    },[])
    //changing value of toggle
    const toggleFlag=() =>{
        setFlag(!flag);
        console.log(flag)
    }
    //for clearing form 
    const clearForm = () => {
        setId({id: -1});
        setUsername({username: ''});
        setEmail({email: ''});
        setPhone({phone: ''});
        
    }
    //for enabling update button
    const enableUpdateBtn = (event, item) => {
        event.preventDefault();
        toggleFlag();
        setId( item.id);
        setUsername(item.fname);
        setEmail(item.email);
        setPhone(item.phone);
      
    }
    //for changing value
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUsername(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='phone'){
            setPhone(e.target.value)
        }
        
    }
    //for creating a new contact
    const handleCreate=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:username,
            email:email,
            phone:phone,

        }
        clearForm();
        axios.post('http://localhost:3001/empDetails',obj).then((
            res)=>setContact(res.data)).then((res)=>window.location.reload()).catch((err)=>console.log(err))
    }
    //for updating
    const handleUpdate = (event) => {
        event.preventDefault();
        let temp = [...contact]
        let obj = temp.find((item)=>item.id ===id)
        setUsername({username:obj.fname  })
        setEmail({email:obj.email  })
        setPhone({phone:obj.phone  })
        
        
        setContact({contact: temp})
        axios.patch(`http://localhost:3001/empDetails/${id}`,{
            fname: username,
            email: email,
            phone: phone
        }).then((res)=>
        setContact(res.data)).then((res)=>window.location.reload()).catch((err)=>console.log(err))

        // after update is done, resetting the values for future
        clearForm();
        toggleFlag();
    }
    //for deleting a contact
    const deleteItem=(itemid)=>{
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>
        setContact(res.data)).then((res)=>window.location.reload()).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>
       setContact(res.data)).then((res)=>window.location.reload()).catch((err)=>console.log(err))
 
     }
     
    return(
       <div>
        <h2>Contact Manager</h2>
        <div className='container'>
            
        {
            contact.map((item)=>(
                <div className='col-sm-4'>
                <div  className='card'>
                    <h1 >{item.fname}</h1>
                    <p>{item.phone}</p>
                    <p>{item.email}</p>
                  
                    <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                    <button className='btn btn-primary' onClick={(e)=>enableUpdateBtn(e, item)}>Update</button>
                </div></div> 
            ))
        }
        <div>
        <form className="form">
                    <h3 className="h-3">Contact Form </h3>
                    Username:
                   <input type='text' className="username" placeholder="Enter Username"  onChange={(e)=>handleChange(e,'uname')} value={username}></input>
                Phone:
                <input type='text'className="phone" placeholder="Enter Phone No."  onChange={(e)=>handleChange(e,'phone')} value={phone}></input>
                Email:
                <input type='text' className="email" placeholder="Enter Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
            
                {
                        flag?  <button className="button-add" onClick={(e)=>handleCreate(e)}>Add contact</button>:
                        <button className="button-update" onClick={(e)=>handleUpdate(e)}>Update contact</button> 
                    }
               
                
                </form>
               
        </div></div></div>
    )
}
export default ContactManager