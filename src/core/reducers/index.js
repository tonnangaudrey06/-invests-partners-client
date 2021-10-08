import { combineReducers } from 'redux'
import authReducer from './auth/reducers';
import appReducer from './app/reducers';

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

export default reducers;