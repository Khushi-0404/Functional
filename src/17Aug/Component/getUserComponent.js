import { useEffect } from 'react'

const GetUserComponent=(props)=>{
    useEffect(()=>{
        props.getUserData()
    },[])
    return(
        <div>
           {console.log(props)}
        <h1>USer details</h1>
        </div>
    )
}
export default GetUserComponent