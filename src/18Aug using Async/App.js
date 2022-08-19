import ViewUsers from "./CRUD/Component/viewUser"
import {BrowserRouter, Link, Route,Routes} from "react-router-dom"
import AddUser from "./CRUD/Component/addUser"
import UpdateUser from "./CRUD/Component/updateUser"

function App()
{
    return(
        
        <div>
            
            <BrowserRouter>
            
            <Routes>
                
            <Route path="/" element={<ViewUsers></ViewUsers>}></Route>
            <Route path="/add" element={<AddUser></AddUser>}></Route>
            <Route path='/update' element={<UpdateUser></UpdateUser>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App