import {createStore, applyMiddleware} from 'redux'
// import cakeReducer from './cake/cakeReducer'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(cakeReducer)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk)))

export default store