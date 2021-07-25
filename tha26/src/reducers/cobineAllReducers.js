import reducer from './index'
import { combineReducers } from 'redux'

const rootreducer=combineReducers({statesReducer:reducer});

export default rootreducer;