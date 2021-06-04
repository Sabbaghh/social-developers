import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'

const initialState = {}
const Middleware = [thunk]

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...Middleware)),
)

export default store
