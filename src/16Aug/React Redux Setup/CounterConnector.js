import { connect } from "react-redux";
import CounterComponent from "./CounterComponent";
import { increment,decrement } from "../Actions/index";

const mapStateToProps=(state)=>{
    return{
        count:state
    }
}
const mapDisptachToProps=(dispatch)=>{
    return{
        plus:()=>dispatch(increment()),
        minus:()=>dispatch(decrement())
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(CounterComponent)