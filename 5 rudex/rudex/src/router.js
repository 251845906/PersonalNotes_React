import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Provider } from  'react-router-redux';
import Index from './index/Index';
import { createStore }
const store =
export default class Nrouter extends React.Component{
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