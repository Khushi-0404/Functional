import DashBoard from "./Redux toolkit/Components/Dashboard"
import LoginComponent from "./Redux toolkit/Components/LoginComponent"
import { BrowserRouter, Route,Routes} from "react-router-dom"
function App()
{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
                <Route path="/user" element={<DashBoard></DashBoard>}></Route>
       
       </Routes>
       </BrowserRouter>
        </div>
    )
}
export default App