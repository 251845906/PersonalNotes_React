import React,{ Component } from 'react';
// react 模块引入
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// 路由引入
import { Provider } from  'react-redux';
// rudex
import Index from './index/Index';
// 主页
import configureStore from './rudex/store';
//
let store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Nrouter extends Component{
    render(){
        return(
            <Provider store={store} >
                <Router>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}