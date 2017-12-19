import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom';
import './index.css'
import Api from './Api/Index'
import Example from './Example/Index'
import Guides from './Guides/Index'
class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/Example"> Example 案例；小案例</Link></li>
                        <li><Link to="/Guide"> Guide 指南；快速开始</Link></li>
                        <li><Link to="/Api"> Api api查询</Link></li>
                        <li>exact表示只有完全匹配的时候显示 而如果没有的话 匹配的是最底部的地址/</li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route path="/Api" component={Api}/>
                        <Route path="/Example" component={Example}/>
                        <Route path="/Guide" component={Guides}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
const Index = () =>(<h1>首页</h1>)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
