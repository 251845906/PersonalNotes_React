import React ,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class NavRouter extends React.Component {
    constructor({match},props) {
        super(props);
        this.match = match;
    }

    render() {
        return ( <div>
            <h2>主题列表</h2>
            <ul>
                <li>
                    <Link to={`${this.match.url}/rendering`}>
                        使用 React 渲染
                    </Link>
                </li>
                <li>
                    <Link to={`${this.match.url}/components`}>
                        组件
                    </Link>
                </li>
                <li>
                    <Link to={`${this.match.url}/props-v-state`}>
                        属性 v. 状态
                    </Link>
                </li>
            </ul>
            <Route path={`${this.match.url}/:topicId`} component={Topic}/>
            {/*<Route exact path={this.match.url} render={() => (<h3>请选择一个主题。</h3>)}/>*/}
        </div>)
    }
}

const Topic = ({ match }) =>(<div>{match.params.topicId}</div>);

export default  NavRouter