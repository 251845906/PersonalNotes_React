import React,{ Component } from 'react';
// react 模块引入
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// 路由引入
import { Provider } from  'redux';
// rudex
import Index from './index/Index';
// 主页
import { createStore } from 'redux';
// redux
import todoApp from './rudex/reducer';
// reducer 文件


const store = createStore(todoApp);
export default class Nrouter extends Component{
    render(){
        return(
            <Provider store={store} >
                <Router>
                    <Route path="/" component={Index}/>
                </Router>
            </Provider>
        )
    }
}