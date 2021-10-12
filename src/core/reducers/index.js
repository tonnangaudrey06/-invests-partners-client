import { combineReducers, createStore } from 'redux'
import authReducer from './auth/reducers';
import appReducer from './app/reducers';

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store;