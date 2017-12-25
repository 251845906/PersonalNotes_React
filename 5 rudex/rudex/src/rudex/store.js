import { applyMiddleware, createStore } from 'redux';
import reducers from './reducer';
export default function configureStore (init){
    const store = createStore(reducers, init, applyMiddleware(thunk));
      return store
}


