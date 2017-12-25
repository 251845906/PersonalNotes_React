import React,{ Component } from 'react';
import { connect } from 'react-redux'
import action from "../rudex/actions";

class Counter extends Component {
    reducedClick=()=>{
        this.props.reduced(this.props.value - 1)
    }
    increaseClick=()=>{
        this.props.increase(this.props.value + 1)
    }
    render() {
        const {val} = this.props;
        return (
            <div>
                <input type="text" value={val}/><br/>
                <input type="button" value="-" onClick={this.reducedClick.bind(this)}/>
                <input type="button" value="+" onClick={this.increaseClick.bind(this)}/>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        val:state.val
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        reduced:(event) => dispatch(action.reducedClick(event)),
        increase:(event) => dispatch(action.increaseClick(event))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter)