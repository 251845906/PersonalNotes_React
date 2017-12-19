import React ,{ Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

class NavRouter extends React.Component{
    constructor({match},props){
        super(props);
        this.match = match;
    }
    render(){
        return(
                <div>
                    <h1>遇见的问题 1 match 2 </h1>
                    <h2>重点：：`${this.match.url}/:nav`</h2>
                    <h2>重点：：match.params.nav获取的/后面的值</h2>
                    <ul>
                        <li><Link to={`${this.match.url}/1`}>基本使用</Link></li>
                        <li><Link to={`${this.match.url}/2`}>URL认证参数</Link></li>
                        <li><Link to={`${this.match.url}/3`}>自定义链接</Link></li>
                        <li><Link to={`${this.match.url}/4`}>阻止导航</Link></li>
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
                <div>看首页的源码</div>
            )
            break;
        case '2':
            return (
                <div></div>
            )
            break;
        case '3':
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