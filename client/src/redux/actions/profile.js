import axios from 'axios'
import { setAlert } from './alert'
import constants from '../constants'

const { PROFILE_ERROR, GET_PROFILE, ADD_EXPERIENCE, ADD_EDUCATION } = constants

//get current user profile
export const getProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('api/profile/me')
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//create or update profile

export const createProfile = (formData, history, edit) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const body = JSON.stringify({ ...formData })
		const res = await axios.post('/api/profile', body, config)
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})

		//render an alert whether user already had a profile or not
		dispatch(
			setAlert(
				edit ? 'Profile has been updated' : 'Profile has been added',
				'success',
			),
		)
		// if user doesn't already have a profile it will redirect him to dashboard
		if (!edit) {
			history.push('/dashboard')
		}
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
		const erros = err.response.data.errors
		if (erros) {
			erros.forEach((errs) => dispatch(setAlert(errs.msg, 'danger')))
		}
	}
}

//Add experince

export const AddExperiences = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const body = JSON.stringify({ ...formData })
		const res = await axios.put('/api/profile/experience', body, config)
		dispatch({
			type: ADD_EXPERIENCE,
			payload: res.data,
		})
		dispatch(setAlert('A new experince has just been added', 'success'))
	} catch (err) {
		console.log(err)
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
		const erros = err.response.data.errors
		if (erros) {
			erros.forEach((errs) => dispatch(setAlert(errs.msg, 'danger')))
		}
	}
}

//Add education
export const AddEducations = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const body = JSON.stringify({ ...formData })
		const res = await axios.put('/api/profile/education', body, config)
		dispatch({
			type: ADD_EDUCATION,
			payload: res.data,
		})
		dispatch(setAlert('A new Education has just been added', 'success'))
	} catch (err) {
		console.log(err)
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
		const erros = err.response.data.errors
		if (erros) {
			erros.forEach((errs) => dispatch(setAlert(errs.msg, 'danger')))
		}
	}
}
