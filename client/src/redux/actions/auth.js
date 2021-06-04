import constants from '../constants'
import { setAlert } from './alert'
import axios from 'axios'
import setAuthToken from '../../utlis/setAuthToken'

const {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} = constants

//load user

export const loadUser = () => async (dispatch) => {
	//chek if local storage has token
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	try {
		const res = await axios.get('/api/auth')
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		})
	} catch (error) {
		dispatch({
			type: AUTH_ERROR,
		})
	}
}
//register user
export const registerNewUser = (name, email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const body = JSON.stringify({
		email,
		name,
		password,
	})

	try {
		const res = await axios.post('/api/users', body, config)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		})
		dispatch(loadUser())
	} catch (errors) {
		const err = errors.response.data.errors
		console.log(err)
		if (err) {
			err.forEach((errs) => dispatch(setAlert(errs.msg, 'danger')))
		}
		dispatch({
			type: REGISTER_FAIL,
		})
	}
}
//Login user
export const loginUser = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const body = JSON.stringify({
		email,
		password,
	})

	try {
		const res = await axios.post('/api/auth ', body, config)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		})
		dispatch(loadUser())
	} catch (errors) {
		const err = errors.response.data.errors
		console.log(err)
		if (err) {
			err.forEach((errs) => dispatch(setAlert(errs.msg, 'danger')))
		}
		console.log(errors.response.data)
		dispatch({
			type: LOGIN_FAIL,
		})
	}
}
