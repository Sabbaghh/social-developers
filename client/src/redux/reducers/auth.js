import constants from '../constants'

const {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOG_OUT_USER,
} = constants

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
}

const auth = (state = initialState, action) => {
	const { payload, type } = action
	switch (type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token)
			return { ...state, ...payload, isAuthenticated: true, loading: false }
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOG_OUT_USER:
<<<<<<< HEAD
			localStorage.clear('token')
=======
			localStorage.removeItem('token')
>>>>>>> ed9bc35 ( initalize logout finctionality)
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			}
		case USER_LOADED:
			return {
				...state,
				user: payload,
				isAuthenticated: true,
				loading: false,
			}

		default:
			return state
	}
}

export default auth
