import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom';
import './index.css';
import Navrouter from './Navrouter'
import Api from './Api/Index'
import Example from './Example/Index'
import Guides from './Guides/Index'
const Irouter = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/Navrouter" component={Navrouter}/>
                <Route path="/Api" component={Api}/>
                <Route path="/Example" component={Example}/>
                <Route path="/Guide" component={Guides}/>
            </Switch>
        </Router>
    )
}


const Index = () =>(<Link to="/Navrouter">跳转导航</Link>)
ReactDOM.render(<Irouter />, document.getElementById('root'));
registerServiceWorker();
