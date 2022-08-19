import './style.css'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
        
        <nav className="nav">
        <ul>
        <li><Link className="first" to ="/"><i className='fa fa-home'></i></Link>
        </li>
        <li><Link className="first" to ="/add"> Add Contact</Link>
        </li>
        <li><Link className="second" to="/update">Update Contact</Link>
        </li>
     
      
     
      </ul>
        </nav>
    )
}
export default Navbar