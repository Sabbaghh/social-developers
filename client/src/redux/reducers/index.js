import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import { combineReducers } from 'redux'

const reducers = combineReducers({
	alert,
	auth,
	profile,
	post,
})

export default reducers
