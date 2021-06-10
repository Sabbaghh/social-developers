import axios from 'axios'
import { setAlert } from './alert'
import constants from '../constants'

const {
	PROFILE_ERROR,
	GET_PROFILE,
	ADD_EXPERIENCE,
	ADD_EDUCATION,
	DELETE_EDUCATION,
	DELETE_EXPERIENCE,
	DELETE_USER,
	CLEAR_PROFILE,
	GET_PROFILES,
	GET_REPOS,
} = constants

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
//GET ALL PROFILES
export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE })
	try {
		const res = await axios.get('api/profile')
		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}

//GET PROFILE BY ID
export const getProfilesByID = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/profile/user/${id}`)
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

//GET GITHUB REPOS
export const getGithubRepos = (username) => async (dispatch) => {
	try {
		const res = await axios.get(`api/profile/github/${username}`)
		dispatch({
			type: GET_REPOS,
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

export const AddExperiences = (formData, history) => async (dispatch) => {
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
		history.push('/dashboard')
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
export const AddEducations = (formData, history) => async (dispatch) => {
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
		history.push('/dashboard')
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

//DELETE EXPERIENCE

export const deleteExperience = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/profile/experience/${id}`)
		dispatch({
			type: DELETE_EXPERIENCE,
			payload: res.data,
		})
		dispatch(setAlert('An experince has just been deleted', 'success'))
	} catch (error) {
		console.log(error)
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		})
	}
}

//DELETE EXPERIENCE

export const deleteEducation = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/profile/education/${id}`)
		dispatch({
			type: DELETE_EDUCATION,
			payload: res.data,
		})
		dispatch(setAlert('An education has just been deleted', 'success'))
	} catch (error) {
		console.log(error)
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		})
	}
}

//delete user

export const deleteUser = () => async (dispatch) => {
	if (window.confirm(`Are you sure ? this can't be undone`)) {
		try {
			await axios.delete(`/api/profile`)
			dispatch({
				type: CLEAR_PROFILE,
			})
			dispatch({
				type: DELETE_USER,
			})
			dispatch(setAlert('Your account has been deleted'))
		} catch (error) {
			console.log(error)
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					status: error.response.status,
				},
			})
		}
	}
}
