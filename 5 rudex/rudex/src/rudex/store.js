import { createStore } from 'react-router-redux';
import todoApp  from './reducer';

let store = createStore(todoApp,window.STATE_FROM_SERVER)


