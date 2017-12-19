import React ,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class NavRouter extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to={{pathname:'/Api',search:'?BrowserRouter'}}>BrowserRouter</Link></li>
                <li><Link to={{pathname:'/Api',search:'?HashRouter'}}>HashRouter</Link></li>
                <li><Link to={{pathname:'/Api',search:'?Link'}}>Link</Link></li>
                <li><Link to={{pathname:'/Api',search:'?NavLink'}}>NavLink</Link></li>
                <li><Link to={{pathname:'/Api',search:'?MemoryRouter'}}>MemoryRouter</Link></li>
                <li><Link to={{pathname:'/Api',search:'?Redirect'}}>Redirect</Link></li>
                <li><Link to={{pathname:'/Api',search:'?Router'}}>Router</Link></li>
                <li><Link to={{pathname:'/Api',search:'?Route'}}>Route</Link></li>
                <li><Link to={{pathname:'/Api',search:'?StaticRouter'}}>StaticRouter</Link></li>
                <li><Link to={{pathname:'/Api',search:'?Switch'}}>Switch</Link></li>
                <li><Link to={{pathname:'/Api',search:'?history'}}>history</Link></li>
                <li><Link to={{pathname:'/Api',search:'?location'}}>location</Link></li>
                <li><Link to={{pathname:'/Api',search:'?matchPath'}}>matchPath</Link></li>
                <li><Link to={{pathname:'/Api',search:'?xxxx'}}>matchPath</Link></li>
            </ul>
        )
    }
}

export default  NavRouter