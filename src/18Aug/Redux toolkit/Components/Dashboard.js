import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const DashBoard=()=>{
   const result= useSelector((state)=>state.userinfo.state)
  
   const handleLogin=(e)=>{
    e.preventDefault()
    

}
return(
    <div>
        <Link to="/user"></Link>
        {console.log(result)}
        
        <h1>DashBoard Component</h1>
        <p>Name: {result.username}</p>
        <p>Email:{result.email} </p>
        <p>Designation:{result.designation}</p>
        <button onClick={(e)=>handleLogin(e)}><Link to="/">log out</Link></button>
    </div>

)
}
export default DashBoard