import { createStore } from 'react-router-redux';
import reducer from './reducer';

let store = createStore(reducer,window.STATE_FROM_SERVER)


