import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUsers=createAsyncThunk('/CRUD/fetchUsers',async ()=>{
try{
    const result=await axios.get('http://localhost:3001/empDetails')
   
    return result.data
}
catch(e){
    console.log(e)
}
})


const initialValue={
    usersData:[],
    statusText:""
}
const userSlice=createSlice({
    name:'user',
    initialState:{
        value:initialValue
    },
    reducers:{
        addUser:(state,action)=>{
            console.log('action is triggered',action)
            state.value.usersData.push(action.payload)
            try{
                const result= axios.post('http://localhost:3001/empDetails',action.payload)
               
                return result.data
            }
            catch(e){
                console.log(e)
            }
            
            
        },
        removeUser:(state,action)=>{
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload.userid)
            state.statusText="Data Deleted"
            try{
                const result= axios.delete(`http://localhost:3001/empDetails/${action.payload.userid}`)
               
                return result.data
            }
            catch(e){
                console.log(e)
            }
           
        },
        updateUser:(state,action)=>{
            console.log(action)
           const userData=state.value.usersData.find((item)=>item.id==action.payload.userid)
          
           if(userData){
           
            try{
                const result= axios.patch(`http://localhost:3001/empDetails/${action.payload.userid}`,{
                fname:action.payload.newname,
                email:action.payload.newemail,
                phone:action.payload.newphone
            })
                return result.data
            }
            catch(e){
                console.log(e)
            }
           }
          
        }
      
    },
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            console.log("pending",action)
           
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.value.usersData=[...state.value.usersData,...action.payload]
            
        },
        [fetchUsers.rejected]:(state,action)=>{
            console.log('fullfiled',action)
        }
    }
})
export const {addUser,removeUser,updateUser}=userSlice.actions
export default userSlice.reducer;