import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom';

export default class Navrouter extends React.Component{
    render(){
        return(
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/Example"> Example 案例；小案例</Link></li>
                        <li><Link to="/Guide"> Guide 指南；快速开始</Link></li>
                        <li><Link to="/Api"> Api api查询</Link></li>
                        <li>exact表示只有完全匹配的时候显示 而如果没有的话 匹配的是最底部的地址/</li>
                    </ul>
                </div>
        )
    }
}