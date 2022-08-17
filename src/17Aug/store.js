import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducer/userReducer'
let initialState={

}

const store=createStore(userReducer,initialState,applyMiddleware(thunk))
export default store;