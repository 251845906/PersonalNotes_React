import React,{ Component } from 'react';
import { connect } from 'react-redux'
import action from "../rudex/actions";

class Counter extends Component {
    reducedClick(){
        this.props.reduced([this.props.val - 1,this.props.id - 1])
    }
    increaseClick(){
        this.props.increase([this.props.val + 1,this.props.id + 1])
    }
    handlChange(){}
    render() {
        let {val,id} = this.props;
        return (
            <div>
                <p>{id}</p>
                <input type="text" value={val} onChange={this.handlChange.bind(this)}/><br/>
                <input type="button" value="-" onClick={this.reducedClick.bind(this)}/>
                <input type="button" value="+" onClick={this.increaseClick.bind(this)}/>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        val:state.val,
        id:state.id
        /*返回指定的state数据。*/
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        reduced:(event) => dispatch(action.reducedClick(event)),
        increase:(event) => dispatch(action.increaseClick(event))
    //    传入dispatch，返回使用bindActionCreators()绑定的action方法。
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter)