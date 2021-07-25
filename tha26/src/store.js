import rootreducer from "./reducers/cobineAllReducers";
import {createStore} from 'redux';

const store =createStore(rootreducer)

export default store;