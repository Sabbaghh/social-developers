import axios from 'axios'
import { setAlert } from './alert'
import constants from '../constants'

const { PROFILE_ERROR, GET_PROFILE } = constants

//get current user profile
export const getProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('api/profile/me')
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		})
	} catch (err) {
		console.log(err)
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		})
	}
}
