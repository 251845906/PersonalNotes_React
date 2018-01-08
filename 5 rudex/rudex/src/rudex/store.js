import { applyMiddleware, createStore } from 'redux';
import reducers from './reducer';
//  init  使用浏览器插件
// applyMiddleware  异步操作时候需要动用的
export default function configureStore (init){
    const store = createStore(reducers, init);

      return store
}
// reducers 调用 reducer文件


