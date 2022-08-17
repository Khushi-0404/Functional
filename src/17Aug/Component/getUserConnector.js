import {connect} from 'react-redux'
import axios from 'axios'
import {getUserData} from '../action/userAction'
import GetUserComponent from './getUserComponent'

const mapStateToProps=(state)=>{
    return{
        users:state.users,
        isLoading:state.loading
    }
}

export default connect(mapStateToProps,{getUserData})(GetUserComponent)