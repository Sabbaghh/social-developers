import alert from './alert'
import auth from './auth'
import { combineReducers } from 'redux'

const reducers = combineReducers({
	alert,
	auth,
})

export default reducers
