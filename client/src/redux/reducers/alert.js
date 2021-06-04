import constants from '../constants'
const initialState = []

const alert = (state = initialState, action) => {
	const { type, payload } = action
	const { REMOVE_ALERT, SET_ALERT } = constants
	switch (type) {
		case SET_ALERT:
			return [...state, payload]
		case REMOVE_ALERT:
			return state.filter((alert) => alert.id !== payload)
		default:
			return state
	}
}

export default alert
