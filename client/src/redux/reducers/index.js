import LoginReducer from './LoginReducer'
import SignUpReducer from './SignUpReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
	LoginReducer,
	SignUpReducer,
})

export default reducer
