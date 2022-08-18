import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchUsers=createAsyncThunk('/CRUD/fetchUsers',async ()=>{
    try{
        const result=await axios.get('https://jsonplaceholder.typicode.com/users')
       
        return result.data
    }
    catch(e){
        console.log(e)
    }
    })
    const initialValue={
        usersData:[],
        loading:true
    }
    const userSlice=createSlice({
        name:'user',
        initialState:{
            value:initialValue
        },
        reducers:{
    
        },
        extraReducers:{
            [fetchUsers.pending]:(state,action)=>{
                console.log("pending",action)
                state.loading=false
            },
            [fetchUsers.fulfilled]:(state,action)=>{
                console.log('fullfiled',action)
                state.loading=false
                state.value.usersData=[...state.value.usersData,...action.payload]
                
            },
            [fetchUsers.rejected]:(state,action)=>{
                console.log('fullfiled',action)
                state.loading=false
            }
        }
    })
    export default userSlice.reducer;