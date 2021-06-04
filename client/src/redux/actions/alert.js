import constants from '../constants'
import { v4 as uuidv4 } from 'uuid'

const { SET_ALERT, REMOVE_ALERT } = constants
export const setAlert = (msg, alertType) => (dispatch) => {
	const id = uuidv4()
	dispatch({
		type: SET_ALERT,
		payload: {
			msg,
			alertType,
			id,
		},
	})
}
