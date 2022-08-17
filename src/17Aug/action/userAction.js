import axios from 'axios'

export const getUserData=()=>async (dispatch)=>{
    try{
      const res=await axios.get('https://jsonplaceholder.typicode.com/users')
        let data=res.data
        return dispatch(
            {
                type:'GET_USER',
                payload:data
            }
        )
       /* axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            
            return dispatch(
                {
                    type:'GET_USER',
                    payload:res.data
                }  
            )
        }
            ).catch((e)=>console.log(e))*/

    }
    catch(er){
        console.log(er)
    }
}