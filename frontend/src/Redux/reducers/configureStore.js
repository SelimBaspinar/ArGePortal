import {applyMiddleware, createStore} from "redux"
import reducers from './index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export default function configureStore (){
    const store = createStore(reducers,applyMiddleware(thunk,logger));
        return store;
}


