import React ,{ Component } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

class NavRouter extends React.Component{
    constructor({match},props){
        super(props);
        this.match = match;
    }
    render(){
        return(
                <div>
                    <ul>
                        <li><Link to={`${this.match.url}/1`}>基本使用</Link></li>
                        <li><Link to={`${this.match.url}/2`}>URL参数</Link></li>
                        <li><Link to={`${this.match.url}/3`}>认证</Link></li>
                        <li><Link to={`${this.match.url}/4`}>阻止导航 自定义链接</Link></li>
                        <li><Link to={`${this.match.url}/5`}>未匹配（404）</Link></li>
                        <li><Link to={`${this.match.url}/6`}>路径递归</Link></li>
                        <li><Link to={`${this.match.url}/7`}>侧边栏</Link></li>
                        <li><Link to={`${this.match.url}/8`}>过渡动画</Link></li>
                        <li><Link to={`${this.match.url}/9`}>模糊匹配</Link></li>
                        <li><Link to={`${this.match.url}/10`}>路由配置</Link></li>
                        <li><Link to={`${this.match.url}/11`}>模态画廊</Link></li>
                    </ul>
                    <Route exact path={`${this.match.url}`} render={()=>(<h1>请选择一个导航</h1>)}/>
                    <Route path={`${this.match.url}/:nav`} component={Example}/>
                </div>
        )
    }
}
const Example = ({match}) =>{
    const Url = match.params.nav;
    switch (Url){
        case '1':
            return (
                <div>
                    <h1>遇见的问题 1 match </h1>
                    <p>{"`{$this.match.url}`"}</p>
                    <p>{"`{$this.match.url}`"}指的的是当前的url</p>
                    <p>{"`{$match.url}`"}根据方式不同也写成这样</p>
                    <h1>遇见的问题 2 Route的render属性 reder（）可直接写入jsx</h1>
                    <h1>遇见的问题 3 Route的exact属性  exact为true时，则要求路径与location.pathname必须完全匹配；</h1>
                </div>
            );
            break;
        case '2':
            return (
                <div>
                    <h1>重点：：{"`{$this.match.url}/:nav(随意定义)`"}</h1>
                    <p>重点：：match.params.nav获取的/后面的值</p>
                    <p>重点：：match.params获取的是子域名</p>
                    {match.params.nav}
                </div>
            );
            break;
        case '3':
            return(
                <div>
                    (目前没看懂什么意思先看后边的)
                </div>
            );
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '10':
            break;
        case '11':
            break;
    }
};



export default  NavRouter