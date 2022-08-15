import React from 'react'
import { useState } from "react"
const SimpleExample=() => {
    const[obj ,setObject] =useState({
        fname:"john",
        count:1
    })
const setChange=(e)=>{
    e.preventDefault()
    setObject((prev)=>{
        return{
            ...prev,
            fname:"Ram"
            //count:6
        }
    })

}
const changeStatus=(e)=>{
    e.preventDefault()
    setObject((prev)=>{
        return prev+1
    })
}
    return (
        <div>
<h2>Welcome</h2>
<h3>{obj.fname}</h3>
<h3>{obj.count}</h3>
<button onClick={(e)=> setChange(e)}>Change</button>
<button onClick={(e)=> changeStatus(e)}>Second</button>
</div>
    )
}
export default SimpleExample