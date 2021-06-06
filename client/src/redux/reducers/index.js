import alert from './alert'
import auth from './auth'
import profile from './profile'
import { combineReducers } from 'redux'

const reducers = combineReducers({
	alert,
	auth,
	profile,
})

export default reducers
